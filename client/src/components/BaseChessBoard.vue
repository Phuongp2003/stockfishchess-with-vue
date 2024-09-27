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
</style>

<template>
	<div>
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
		<button
			@click="callTimeout(currentPlayer)"
			v-if="currentPlayer == 'black'">
			Call Timeout
		</button>
		<div>
			B
			<Timer
				ref="whiteTimer"
				:initialTime="600"
				@time-up="handleTimeUp('white')" />
			W
			<Timer
				ref="blackTimer"
				:initialTime="600"
				@time-up="handleTimeUp('black')" />
		</div>
		<label>
			<input
				type="checkbox"
				v-model="showSupportLine" />
			Show Support Line
		</label>
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
						await new Promise((resolve) =>
							setTimeout(resolve, 10000)
						);
						if (
							this.engine?.bestMove &&
							this.currentPlayer === 'black' &&
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
				if (currentPlayer == 'white') {
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
