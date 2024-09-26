<script setup>
	import { TheChessboard } from 'vue3-chessboard';
	import 'vue3-chessboard/style.css';
	import axios from 'axios'; // Import axios for making HTTP requests

	let boardAPI;

	function handleBoardCreated(boardApi) {
		boardAPI = boardApi;
	}

	async function handleMove() {
		const history = boardAPI?.getHistory(true);

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
				const fen = boardAPI.getFen();
				const isBlackTurn = fen.split(' ')[1] === 'b';

				if (isBlackTurn) {
					// Send the moves to your server
					const response = await axios.post(
						'http://localhost:3000/move',
						{
							move: {
								lan: moves[moves.length - 1],
								after: fen, // Use getFen to get the current FEN string
							},
						}
					);

					// Handle the response from the server
					const bestMove = response.data.bestMove;
					if (bestMove) {
						boardAPI.move({
							from: bestMove.slice(0, 2),
							to: bestMove.slice(2, 4),
						});
					}
				}
			} catch (error) {
				console.error('Error sending move to server:', error);
			}
		}
	}
</script>

<template>
	<TheChessboard
		@board-created="handleBoardCreated"
		@move="handleMove"
		:player-color="'white'" />
</template>
