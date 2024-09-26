<template>
	<div id="app">
		<h1>Chess Game</h1>
		<Chessboard />
	</div>
</template>

<script>
	import Chessboard from '@/components/ChessBoard.vue';

	export default {
		components: {
			Chessboard,
		},
	};
</script>
