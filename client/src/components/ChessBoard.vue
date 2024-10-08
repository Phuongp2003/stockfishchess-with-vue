<template>
	<BaseChessBoard
		ref="baseChessBoard"
		:handleMove="handleMove" />
</template>

<script>
	import BaseChessBoard from '@/components/BaseChessBoard.vue';
	import axios from 'axios';

	export default {
		components: {
			BaseChessBoard,
		},
		extends: BaseChessBoard,
		provide() {
			return {
				iPlayWithBot: false, //must have
			};
		},
		methods: {
			async handleMove() {
				const history =
					this.$refs.baseChessBoard.boardAPI?.getHistory(true);

				const moves = history?.map((move) => {
					if (typeof move === 'object') {
						return move.lan;
					} else {
						return move;
					}
				});

				if (moves) {
					try {
						// Check if it's black's turn
						const fen = this.$refs.baseChessBoard.boardAPI.getFen();
						const isBlackTurn = fen.split(' ')[1] === 'b';

						if (isBlackTurn) {
							this.$refs.baseChessBoard.startBlackTimer();

							// Send the moves to your server
							const response = await axios.post(
								'http://localhost:3000/move',
								{
									move: {
										lan: moves[moves.length - 1],
										after: fen,
									},
								}
							);

							// Handle the response from the server
							const bestMove = response.data.bestMove;
							if (bestMove) {
								this.$refs.baseChessBoard.boardAPI.move({
									from: bestMove.slice(0, 2),
									to: bestMove.slice(2, 4),
								});
							}
						} else {
							this.$refs.baseChessBoard.startWhiteTimer();
						}
					} catch (error) {
						console.error('Error sending move to server:', error);
					}
				}
			},
		},
	};
</script>
