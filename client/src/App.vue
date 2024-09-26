<template>
	<div id="app">
		<h1>Chess Game {{ useServer ? 'with server' : 'without server' }}</h1>
		<p
			v-if="errorMessage"
			class="error">
			{{ errorMessage }}
		</p>
		<label>
			<input
				type="checkbox"
				v-model="useServer"
				@change="handleUseServerChange" />
			Use Server
		</label>
		<component :is="useServer ? 'Chessboard' : 'ChessboardServerless'" />
	</div>
</template>

<script>
	import Chessboard from '@/components/ChessBoard.vue';
	import ChessboardServerless from '@/components/ChessBoardServerless.vue';
	import axios from 'axios';

	export default {
		components: {
			Chessboard,
			ChessboardServerless,
		},
		data() {
			return {
				useServer: true,
				errorMessage: '', // To store error messages
			};
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
	};
</script>

<style>
	.error {
		color: red;
		font-size: 20px;
	}
</style>
