<style>
	.error {
		color: white;
		font-size: 20px;
	}
	.error-message {
		position: absolute;
		top: 10px;
		left: 50%;
		transform: translateX(-50%);
		width: max-content;
		max-width: 100%;
		background-color: rgba(0, 0, 0, 0.8);
		border: red 2px solid;
	}
	.connection-status {
		margin-top: 10px;
		font-weight: bold;
	}

	.d-flex {
		display: flex;
	}

	.flex-col {
		flex-direction: column;
	}
	.flex-row {
		flex-direction: row;
	}

	.main-chessboard-wrap {
		width: max-content;
		margin: 0 auto;
		gap: 20px;
	}
</style>

<template>
	<div id="tsk-chess">
		<h1 style="text-align: center">
			{{ playerProfiles.player1.name }} VS
			{{ playerProfiles.player2.name }}
		</h1>
		<div
			v-if="errorMessage"
			class="error-message">
			<p class="error">{{ errorMessage }}</p>
		</div>
		<label>
			<input
				type="checkbox"
				v-model="useServer"
				@change="handleUseServerChange" />
			Use Server
		</label>
		<label>
			<input
				type="checkbox"
				v-model="isPvPMode" />
			PvP Mode
		</label>
		<label>
			<input
				type="checkbox"
				v-model="trainingMode" />
			Training mode
		</label>
		<div v-if="isPvPMode">
			<button @click="createRoom">Create Room</button>
			<input
				v-model="roomId"
				placeholder="Enter Room ID" />
			<button @click="joinRoom">Join Room</button>
			<div v-if="roomId">Room ID: {{ roomId }}</div>
			<div v-if="playerId">Player ID: {{ playerId }}</div>
		</div>
		<div
			class="main-chessboard-wrap d-flex flex-row"
			v-if="currentPlayer && (!isPvPMode || roomJoined)">
			<component
				:is="
					trainingMode && useServer
						? 'TrainBoard'
						: useServer
						? isPvPMode
							? 'ChessboardPVP'
							: 'Chessboard'
						: 'ChessboardServerless'
				"
				ref="chessboardwrap"
				@board-created="createdBoard"
				:matchId="roomId"
				:playerID="playerId"
				:playerColor="currentPlayer"
				:socket="socket" />
			<GameControl
				:boardAPI="boardAPI"
				:trainingStart="trainingStart"
				v-if="boardAPI && trainingMode" />
		</div>

		<div
			class="choose-player"
			v-if="!currentPlayer">
			<label for="player-select">Choose Player:</label>
			<select
				id="player-select"
				v-model="currentPlayer">
				<option
					disabled
					value="">
					Please select one
				</option>
				<option value="white">White</option>
				<option value="black">Black</option>
			</select>
		</div>
		<div class="connection-status">Socket Status: {{ socketStatus }}</div>
	</div>
</template>

<script>
	import Chessboard from '@/components/ChessBoard.vue';
	import TrainBoard from '@/components/TrainBoard.vue';
	import ChessboardPVP from '@/components/PVPBoard.vue';
	import ChessboardServerless from '@/components/ChessBoardServerless.vue';
	import GameControl from './components/GameControl.vue';
	import axios from 'axios';
	import { useCookies } from '@vueuse/integrations/useCookies';
	import { computed, ref } from 'vue';
	import io from 'socket.io-client';

	export default {
		components: {
			Chessboard,
			ChessboardServerless,
			ChessboardPVP,
			GameControl,
			TrainBoard,
		},
		data() {
			return {
				useServer: true,
				isPvPMode: false,
				errorMessage: '',
				playerProfiles: {
					player1: {
						name: 'Demo Player',
						avatar: '/favicon.ico',
					},
					player2: {
						name: 'BOT Stockfish Dept 3',
						avatar: '/images/stockfish-logo.png',
					},
				},
				currentPlayer: null,
				roomId: '',
				playerId: this.cookies.get('user').uid,
				roomJoined: false,
				trainingMode: false,
				socket: null,
				socketStatus: 'Disconnected',
				boardAPI: null,
				startupFen: null
					// 'r2qkb1r/ppp2ppp/2n2n2/3pp3/4P1B1/3P1P1N/PPP3PP/RNB1K2R b KQkq - 0 7',
			};
		},
		setup() {
			const cookies = useCookies();
			return { cookies };
		},
		watch: {
			errorMessage(newValue) {
				if (newValue) {
					setTimeout(() => {
						this.errorMessage = '';
					}, 5000);
				}
			},
			isPvPMode(newValue) {
				if (newValue) {
					this.connectSocket();
				} else {
					this.disconnectSocket();
				}
			},
			currentPlayer(newValue) {
				if (newValue) {
					console.log(newValue); // Clear any previous error messages
				}
			},
		},
		mounted() {
			this.checkServer();
		},
		methods: {
			createdBoard(boardApi) {
				this.boardAPI = boardApi;
			},
			async checkServer() {
				try {
					await axios.post('http://localhost:3000/api/pve/start');
					this.useServer = true;
					this.errorMessage = ''; // Clear any previous error messages
				} catch (error) {
					console.error('Server is not available:', error);
					this.useServer = false;
					this.errorMessage =
						'Server is not available. Using serverless mode.';
				}
			},
			async handleUseServerChange() {
				if (this.useServer) {
					try {
						await axios.post('http://localhost:3000/api/pve/start');
						this.errorMessage = ''; // Clear any previous error messages
					} catch (error) {
						console.error('Server is not available:', error);
						this.useServer = false;
						this.errorMessage =
							'Server is not available. Using serverless mode.';
					}
				} else {
					this.errorMessage = ''; // Clear error message when switching to serverless mode
				}
			},
			connectSocket() {
				this.socket = io('http://localhost:3000', {
					transports: ['websocket'],
					withCredentials: true,
				});
				this.socket.on('connect', () => {
					this.socketStatus = 'Connected';
					console.log('Socket connected:', this.socket.id);
				});
				this.socket.on('disconnect', () => {
					this.socketStatus = 'Disconnected';
					console.log('Socket disconnected');
				});
				this.socket.on('join_success', (data) => {
					this.roomJoined = true;
					console.log('Join success:', data);
				});
				this.socket.on('room_created', ({ gameId, playerId }) => {
					this.roomId = gameId;
					this.joinRoom();
				});
				this.socket.on('choose_color', ({ gameId }) => {
					if (this.roomId === gameId) {
						this.chooseColor();
					}
				});
				this.socket.on('color_chosen', (data) => {
					this.roomJoined = true;
					this.currentPlayer =
						data.gameState.white_player === this.playerId
							? 'white'
							: 'black';
					console.log('Color chosen:', data);
				});
				this.socket.on('error', (message) => {
					this.errorMessage = message;
					console.log('Socket error:', message);
				});
			},
			disconnectSocket() {
				if (this.socket) {
					this.socket.disconnect();
					this.socket = null;
					this.socketStatus = 'Disconnected';
					console.log('Socket disconnected manually');
				}
			},
			createRoom() {
				this.socket.emit('create_room', { playerId: this.playerId });
			},
			joinRoom() {
				this.socket.emit('join_game', {
					gameId: this.roomId,
					playerId: this.playerId,
				});
				this.socket.on('join_success', (data) => {
					this.roomJoined = true;
					console.log('Join success:', data);
				});
			},
			chooseColor() {
				const color = confirm('Do you want to play as white?')
					? 'white'
					: 'black';
				this.socket.emit('choose_color', {
					gameId: this.roomId,
					playerId: this.playerId,
					color,
				});
			},
			async trainingStart() {
				try {
					const response = await axios.post(
						'http://localhost:3000/api/train/start',
						{
							fen: this.$refs.chessboardwrap.boardAPI.getFen(),
							role:
								this.currentPlayer === 'white'
									? 'black'
									: 'white',
							elo: 10,
							coachEloMultiple: 1.2,
						}
					);
					const bestMove = response.data.bestMove;
					if (bestMove) {
						this.$refs.chessboardwrap.boardAPI.move({
							from: bestMove.slice(0, 2),
							to: bestMove.slice(2, 4),
						});
					}
					this.errorMessage = '';
				} catch (error) {
					console.error('Server is not available:', error);
					this.useServer = false;
					this.errorMessage =
						'Server is not available. Using serverless mode.';
				}
			},
		},
		provide() {
			return {
				playerProfiles: computed(() => this.playerProfiles),
				isetupPlayer: computed(() => this.currentPlayer),
				iPlayWithBot: true,
				iTrainingMode: computed(() => this.trainingMode),
				matchId: computed(() => this.roomId),
				playerColor: computed(() => this.currentPlayer),
				errorMessage: ref(() => this.errorMessage),
				startupFen: ref(this.startupFen),
			};
		},
	};
</script>
