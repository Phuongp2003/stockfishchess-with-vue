<template>
	<div id="tsk-chess">
		<h1 style="text-align: center">
			{{ playerProfiles.player1.name }} VS
			{{ playerProfiles.player2.name }}
		</h1>

		<div
			v-if="errorMessage"
			class="error-message">
			<p class="error">
				{{ errorMessage }}
			</p>
		</div>
		<label>
			<input
				type="checkbox"
				v-model="useServer"
				@change="handleUseServerChange" />
			Use Server
		</label>
		<component
			:is="useServer ? 'Chessboard' : 'ChessboardServerless'"
			v-if="currentPlayer" />
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
	</div>
</template>

<script>
	import Chessboard from '@/components/ChessBoard.vue';
	import ChessboardServerless from '@/components/ChessBoardServerless.vue';
	import axios from 'axios';
	import { computed } from 'vue';

	export default {
		components: {
			Chessboard,
			ChessboardServerless,
		},
		data() {
			return {
				useServer: true,
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
				currentPlayer: '',
			};
		},
		watch: {
			errorMessage(newValue) {
				if (newValue) {
					setTimeout(() => {
						this.errorMessage = '';
					}, 5000);
				}
			},
		},
		mounted() {
			this.checkServer();
		},
		methods: {
			async checkServer() {
				try {
					await axios.post('http://localhost:3000/start');
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
						await axios.post('http://localhost:3000/start');
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
		},
		provide() {
			return {
				playerProfiles: computed(() => this.playerProfiles),
				isetupPlayer: computed(() => this.currentPlayer),
				iPlayWithBot: true,
			};
		},
	};
</script>

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
</style>
