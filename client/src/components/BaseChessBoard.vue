<style lang="scss" scoped>
	.flex {
		display: flex;
	}
	.flex-col {
		flex-direction: column;
	}
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
					:player-color="iTrainingMode ? null : setupPlayer" />
				<div
					class="chessboard-overlay"
					:style="`display: ${
						end || inTimePause ? 'block' : 'none'
					}`">
					<div class="text flex">
						<div class="message">{{ message }}</div>
						<button
							class="button"
							@click="startGame()"
							v-if="!isFirstMoveDone && !end">
							Bắt đầu trận đấu
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
				:initialTime="
					playerProfiles.player1.timeless
						? playerProfiles.player1.timeless
						: 600
				"
				@time-up="handleTimeUp(playerProfiles.player1.name)" />
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
				:initialTime="
					playerProfiles.player2.timeless
						? playerProfiles.player2.timeless
						: 600
				"
				@time-up="handleTimeUp(playerProfiles.player2.name)" />
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
			startGame: Function,
		},
		inject: [
			'playerProfiles',
			'baseUrl',
			'isetupPlayer',
			'iPlayWithBot',
			'startupFen',
			'iTrainingMode',
		],
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
				end: false,
				message: 'Hãy chờ để bắt đầu trận đấu!',
				fen:
					this.startupFen ||
					'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
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
				addPieceZIndex: true,
				blockTouchScroll: true,
				orientation: this.setupPlayer,
				fen: this.fen,
				coordinates: true,
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
					this.iPlayWithBot,
					this.setupPlayer,
					this.iTrainingMode
				);
				this.$emit('board-created', boardApi);
			},
			handleTimeUp(player) {
				this.message = `${
					player === this.playerProfiles.player1.name
						? player
						: this.playerProfiles.player2.name
				} đã hết giờ! ${
					player !== this.playerProfiles.player1.name
						? player
						: this.playerProfiles.player2.name
				} giành chiến thắng!`;
				this.end = true;
				this.inTimePause = true;
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
				this.message = 'Hết nước! Game đấu hoà.';
				this.end = true;
				this.inTimePause = true;
			},
			handleCheckmate({ winner, loser }) {
				this.message = `Chiếu hết! ${winner} giành thắng lợi trước ${loser}.`;
				this.end = true;
				this.inTimePause = true;
			},
			handleDraw() {
				this.message = 'Game đấu hoà!';
				this.end = true;
				this.inTimePause = true;
			},
			handleCheck({ playerInCheck }) {
				this.message = `Check! ${playerInCheck} is in check.`;
			},
			handlePromotion({ player, from, to, promotionPiece }) {
				this.message = `${player} promoted a pawn from ${from} to ${to} to a ${promotionPiece}.`;
			},
			setTime(clockRef, timeless) {
				const clock =
					clockRef === 'white'
						? this.$refs.whiteTimer
						: this.$refs.blackTimer;
				clock.setTime(timeless);
			},
			getTime(clockRef) {
				const clock =
					clockRef === 'white'
						? this.$refs.whiteTimer
						: this.$refs.blackTimer;
				return clock.getTime();
			},
		},
	};
</script>
