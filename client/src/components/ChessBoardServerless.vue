<template>
	<BaseChessBoard
		ref="baseChessBoard"
		:handleMove="handleMove" />
</template>

<script>
	import BaseChessBoard from '@/components/BaseChessBoard.vue';

	export default {
		components: {
			BaseChessBoard,
		},
		extends: BaseChessBoard,
		methods: {
			handleMove() {
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
				const isBlackTurn = fen.split(' ')[1] === 'b';
				if (isBlackTurn) {
					this.$refs.baseChessBoard.startBlackTimer();
				} else {
					this.$refs.baseChessBoard.startWhiteTimer();
				}
				if (moves) {
					this.$refs.baseChessBoard.engine?.sendPosition(
						moves.join(' ')
					);
				}
			},
		},
	};
</script>
