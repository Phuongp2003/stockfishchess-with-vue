<template>
	<BaseChessBoard
		ref="baseChessBoard"
		:handleMove="handleMove"
		:startGame="startGame"
		@board-created="createdBoard" />
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
		data() {
			return {
				boardAPI: null,
			};
		},
		inject: ['isetupPlayer', 'iPlayWithBot'],
		methods: {
			createdBoard(boardApi) {
				this.boardAPI = boardApi;
				this.$emit('board-created', boardApi);
			},
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

				const fen = this.$refs.baseChessBoard.boardAPI.getFen();

				if (
					this.isetupPlayer.charAt(0) !== fen.split(' ')[1] &&
					this.iPlayWithBot
				)
					try {
						// Send the moves to your server
						const response = await axios.post(
							'http://localhost:3000/api/train/move',
							{
								move: {
									lan: moves[moves.length - 1],
									after: fen,
								},
								fen,
								elo: 10,
								coachEloMultiple: 1.2,
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
					} catch (error) {
						console.error('Error sending move to server:', error);
					}
			},
			async startGame() {},
		},
	};
</script>
