<script setup>
	import { TheChessboard } from 'vue3-chessboard';
	import 'vue3-chessboard/style.css';
	import { Engine } from './Engine';

	let boardAPI;
	let engine;

	function handleBoardCreated(boardApi) {
		boardAPI = boardApi;

		engine = new Engine(boardApi);
	}

	function handleMove() {
		const history = boardAPI?.getHistory(true);

		const moves = history?.map((move) => {
			if (typeof move === 'object') {
				return move.lan;
			} else {
				return move;
			}
		});

		if (moves) {
			engine?.sendPosition(moves.join(' '));
		}
	}
</script>

<template>
	<TheChessboard
		@board-created="handleBoardCreated"
		@move="handleMove"
		:player-color="'white'" />
</template>
