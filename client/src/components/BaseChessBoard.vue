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
				:class="setupPlayer === 'black' ? 'in-move' : ''">
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
				:class="setupPlayer === 'white' ? 'in-move' : ''">
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
					@stalemate="handleStalemate"
					@board-created="handleBoardCreated"
					@move="handleMove"
					@checkmate="handleCheckmate"
					@draw="handleDraw"
					@check="handleCheck"
					@promotion="handlePromotion"
					:board-config="boardConfig"
					:player-color="setupPlayer"
					:orientation="setupPlayer" />
				<div
					class="chessboard-overlay"
					:style="`display: ${inTimePause ? 'block' : 'none'}`">
					<div class="text">
						{{ !end ? `${currentPlayer} call timeout` : message }}
						<Timer
							ref="timeoutTimer"
							v-if="!end"
							:initialTime="60"
							@time-up="handleTimeoutOver()" />
						<button
							@click="startGame()"
							v-if="!isFirstMoveDone">
							Start game
						</button>
					</div>
				</div>
			</div>
		</teleport>

		<teleport
			to="#player1-profile"
			defer>
			<Timer
				:ref="setupPlayer === 'white' ? 'whiteTimer' : 'blackTimer'"
				:initialTime="600"
				@time-up="handleTimeUp(setupPlayer)" />
			<button
				@click="callTimeout(setupPlayer)"
				v-if="currentPlayer === setupPlayer">
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
				:ref="setupPlayer === 'black' ? 'whiteTimer' : 'blackTimer'"
				:initialTime="600"
				@time-up="
					handleTimeUp(currentPlayer === 'white' ? 'black' : 'white')
				" />
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
		inject: ['playerProfiles', 'baseUrl', 'isetupPlayer', 'iPlayWithBot'],
		data() {
			return {
				isFirstMoveDone: false,
				engine: null,
				showSupportLine: false,
				inTimePause: true,
				currentPlayer: 'white',
				setupPlayer: this.isetupPlayer || 'white',
				boardAPI: null,
				boardConfig: {},
				end: true,
				message: 'Wait for start',
			};
		},
		created() {
			this.boardConfig = {
				events: {
					select: async () => {
						if (
							this.engine?.bestMove &&
							this.currentPlayer === this.setupPlayer &&
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
				orientation: this.setupPlayer,
			};
		},
		methods: {
			handleBoardCreated(boardApi) {
				this.boardAPI = boardApi;
				this.engine = new Engine(
					boardApi,
					this.baseUrl || window.location.origin,
					1,
					this.setupPlayer,
					this.iPlayWithBot
				);
			},
			handleTimeUp(player) {
				this.message = `${player} time is up!`;
				this.end = true;
				this.inTimePause = true;
			},

			callTimeout(player) {
				this.$refs.whiteTimer.pauseTimer();
				this.$refs.blackTimer.pauseTimer();
				this.$refs.timeoutTimer.startTimer();
				this.inTimePause = true;
				this.boardConfig.viewOnly = true;
			},

			handleTimeoutOver() {
				if (this.currentPlayer == 'white') {
					this.$refs.whiteTimer.resumeTimer();
				} else {
					this.$refs.blackTimer.resumeTimer();
				}
				this.inTimePause = false;
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

			handleStalemate() {
				this.message = 'Stalemate! The game is a draw.';
				this.end = true;
				this.inTimePause = true;
			},
			handleCheckmate({ winner, loser }) {
				this.message = `Checkmate! ${winner} wins against ${loser}.`;
				this.end = true;
				this.inTimePause = true;
			},
			handleDraw() {
				this.message = 'Draw! The game is a draw.';
				this.end = true;
				this.inTimePause = true;
			},
			handleCheck({ playerInCheck }) {
				this.message = `Check! ${playerInCheck} is in check.`;
			},
			handlePromotion({ player, from, to, promotionPiece }) {
				this.message = `${player} promoted a pawn from ${from} to ${to} to a ${promotionPiece}.`;
			},
			startGame() {
				this.engine.startGame();
				this.inTimePause = false;
				this.end = false;
				this.message = '';
			},
		},
	};
</script>
