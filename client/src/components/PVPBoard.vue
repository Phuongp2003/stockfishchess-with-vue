<template>
	<BaseChessBoard
		ref="baseChessBoard"
		:handleMove="handleMove"
		:startGame="startGame" />
</template>

<script>
	import BaseChessBoard from '@/components/BaseChessBoard.vue';
	import axios from 'axios';
	import io from 'socket.io-client';

	export default {
		components: {
			BaseChessBoard,
		},
		provide() {
			return {
				iPlayWithBot: false, // PvP không sử dụng bot
			};
		},
		props: {
			matchId: {
				type: String,
				required: true,
			},
			playerID: {
				type: String,
				required: true,
			},
			playerColor: {
				type: String,
				required: true,
			},
			socket: {
				type: Object,
			},
		},
		inject: ['isetupPlayer','errorMessage'],
		data() {
			return {
				localMatchId: this.matchId,
			};
		},
		methods: {
			// Gửi nước đi lên server
			async handleMove(source, target) {
				const fen = this.$refs.baseChessBoard.boardAPI.getFen();
				const move = { source, target };
				try {
					const response = await axios.post(
						'http://localhost:3000/api/game/move',
						{
							matchId: this.matchId,
							playerId: this.playerID,
							move,
							fen,
						}
					);
					// Cập nhật trạng thái từ server
					this.updateGame(response.data);
					this.socket.emit('make_move', {
						gameId: this.matchId,
						playerId: this.playerID,
						move,
					});
				} catch (error) {
					console.error('Error sending move:', error);
				}
			},
			async startGame() {
				if (this.playerColor === 'white') {
					try {
						const response = await axios.post(
							'http://localhost:3000/api/game/start',
							{
								gameId: this.matchId,
								playerId: this.playerID,
								playerColor: this.playerColor,
							}
						);
					} catch (error) {
						console.error('Error starting game:', error);
					}
				}
			},
			// Cập nhật trạng thái game từ server
			updateGame(data) {
				if (data.move) {
					this.$refs.baseChessBoard.boardAPI.move({
						from: data.move.source.from,
						to: data.move.source.to,
					});
				}
				if (data.message) {
					this.errorMessage = data.message;
				}
				if (data.gameOver) {
					this.$refs.baseChessBoard.end = true;
				}
			},

			// // Nhận trạng thái từ server (polling hoặc WebSocket)
			// async fetchGameState() {
			// 	try {
			// 		const response = await axios.get(
			// 			`http://localhost:3000/api/game/state/${this.localMatchId}`
			// 		);
			// 		this.updateGame(response.data);
			// 	} catch (error) {
			// 		console.error('Error fetching game state:', error);
			// 	}
			// },
		},
		mounted() {
			this.socket.on('move_made', (data) => {
				this.updateGame(data);
			});
			this.socket.on('game_started', (data) => {
				console.log(
					'🚀 ~ this.socket.on ~ game_started:',
					'game_started'
				);
				this.$refs.baseChessBoard.inTimePause = false;
				this.$refs.baseChessBoard.end = false;
				this.$refs.baseChessBoard.message = '';
			});
			// Lặp polling trạng thái (tùy chọn nếu không dùng WebSocket)
			// this.gameStateInterval = setInterval(this.fetchGameState, 3000);
		},
		beforeDestroy() {
			// Dọn dẹp polling
			// clearInterval(this.gameStateInterval);
		},
	};
</script>
