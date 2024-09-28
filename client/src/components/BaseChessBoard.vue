<style lang="scss" scoped>
	.chessboard-wrap {
		width: fit-content;
		min-width: 100%;
		height: fit-content;
		position: relative;
		.chessboard-overlay {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			z-index: 1000;
			background-color: rgba($color: #000000, $alpha: 0.6);
			.text {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100%;
				color: red;
				font-size: 40px;
			}
		}
	}

	.game-loadout-mobile {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		max-width: 700px;
		width: 100%;
	}

	.game-loadout {
		.pprofile {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			gap: 20px;
			.profile {
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 10px;
				border: 1px solid black;
				width: 300px;
				padding: 0 5px;
				.avatar {
					width: 60px;
					height: 60px;
					border: 1px solid rgba($color: gray, $alpha: 0.3);
					border-radius: 10px;
					padding: 3px;
					img {
						width: 100%;
						height: 100%;
					}
				}
				.player-name {
					font-size: 20px;
				}
			}
		}
		.pprofile.in-move {
			.profile {
				border: 2px green solid;
			}
		}

		#player1-profile {
			flex-direction: row-reverse;
		}

		#player2-profile {
		}
	}
</style>

<template>
	<div>
		<div class="game-loadout game-loadout-mobile">
			<div
				id="player2-profile"
				class="pprofile"
				:class="currentPlayer === 'black' ? 'in-move' : ''">
				<div class="profile">
					<div class="avatar">
						<img :src="playerProfiles.player2.avatar" />
					</div>
					<div
						class="player-name"
						v-html="playerProfiles.player2.name"></div>
				</div>
			</div>
			<div id="game-field"></div>
			<div
				id="player1-profile"
				class="pprofile"
				:class="currentPlayer === 'white' ? 'in-move' : ''">
				<div class="profile">
					<div class="avatar">
						<img :src="playerProfiles.player1.avatar" />
					</div>
					<div
						class="player-name"
						v-html="playerProfiles.player1.name"></div>
				</div>
			</div>
		</div>
		<teleport
			to="#game-field"
			defer>
			<div class="chessboard-wrap">
				<TheChessboard
					ref="chessboard"
					@board-created="handleBoardCreated"
					@move="handleMove"
					:board-config="boardConfig"
					:player-color="'white'" />
				<div
					class="chessboard-overlay"
					:style="`display: ${inTimeout ? 'block' : 'none'}`">
					<div class="text">
						{{ currentPlayer }} call timeout
						<Timer
							ref="timeoutTimer"
							:initialTime="60"
							@time-up="handleTimeoutOver()" />
					</div>
				</div>
			</div>
		</teleport>

		<teleport
			to="#player1-profile"
			defer>
			<Timer
				ref="whiteTimer"
				:initialTime="600"
				@time-up="handleTimeUp('white')" />
			<button
				@click="callTimeout(currentPlayer)"
				v-if="currentPlayer == 'white'">
				Call Timeout
			</button>
			<label>
				<input
					type="checkbox"
					v-model="showSupportLine" />
				Show Support Line
			</label>
		</teleport>
		<teleport
			to="#player2-profile"
			defer>
			<Timer
				ref="blackTimer"
				:initialTime="600"
				@time-up="handleTimeUp('black')" />
		</teleport>
	</div>
</template>

<script>
	import { TheChessboard } from 'vue3-chessboard';
	import Timer from './Timer.vue';
	import { Engine } from './Engine';

	export default {
		components: {
			TheChessboard,
			Timer,
		},
		props: {
			handleMove: Function,
		},
		inject: ['playerProfiles'],
		data() {
			return {
				engine: null,
				showSupportLine: false,
				inTimeout: false,
				currentPlayer: 'white',
				boardAPI: null,
				boardConfig: {},
			};
		},
		created() {
			this.boardConfig = {
				events: {
					select: async () => {
						if (
							this.engine?.bestMove &&
							this.currentPlayer === 'white' &&
							this.showSupportLine
						) {
							this.boardAPI?.drawMove(
								this.engine.bestMove.slice(0, 2),
								this.engine.bestMove.slice(2, 4),
								'paleBlue'
							);
						}
					},
					move: () => {
						this.boardAPI?.hideMoves();
					},
				},
				autoCastle: true,
				viewOnly: false,
				disableContextMenu: false,
				addPieceZIndex: true,
				blockTouchScroll: true,
			};
		},
		methods: {
			handleBoardCreated(boardApi) {
				this.boardAPI = boardApi;
				this.engine = new Engine(boardApi);
			},
			handleTimeUp(player) {
				console.log(`${player} time is up!`);
			},

			callTimeout(player) {
				this.$refs.whiteTimer.pauseTimer();
				this.$refs.blackTimer.pauseTimer();
				this.$refs.timeoutTimer.startTimer();
				this.inTimeout = true;
				this.boardConfig.viewOnly = true;
			},

			handleTimeoutOver() {
				if (this.currentPlayer == 'white') {
					this.$refs.whiteTimer.resumeTimer();
				} else {
					this.$refs.blackTimer.resumeTimer();
				}
				this.inTimeout = false;
				this.boardConfig.viewOnly = false;
			},

			startBlackTimer() {
				this.currentPlayer = 'black';
				this.$refs.blackTimer.resumeTimer();
				this.$refs.whiteTimer.pauseTimer();
			},

			startWhiteTimer() {
				this.currentPlayer = 'white';
				this.$refs.whiteTimer.resumeTimer();
				this.$refs.blackTimer.pauseTimer();
			},
		},
	};
</script>
