<script>
	import RotBoard from '@/components/icons/RotBoard.vue';
	import Reset from '@/components/icons/Reset.vue';
	import Undo from '@/components/icons/Undo.vue';
	import Redo from '@/components/icons/Redo.vue';
	import Play from '@/components/icons/Play.vue';
	import Eye from '@/components/icons/Eye.vue';
	export default {
		components: { RotBoard, Reset, Undo, Redo, Play, Eye },
		props: {
			boardAPI: { type: Object, required: true },
			trainingStart: { type: Function, required: true },
		},
		data() {
			return {
				opening: '',
			};
		},
		methods: {
			async startGame() {
				this.trainingStart();
			},
		},
	};
</script>

<template>
	<div class="control-demo">
		<div>
			<p>Opening: {{ opening }}</p>
		</div>
		<section class="sect">
			<button
				class="button"
				title="Xoay bàn cờ"
				@click="boardAPI?.toggleOrientation()">
				<RotBoard />
			</button>
			<button
				class="button"
				title="Làm mới bàn cờ"
				@click="boardAPI?.resetBoard()">
				<Reset />
			</button>
			<button
				class="button"
				title="Trở lại 1 nước đi"
				@click="boardAPI?.undoLastMove()">
				<Undo />
			</button>
			<button
				class="button"
				title="Kiểm tra các rủi ro"
				@click="boardAPI?.toggleMoves()">
				<Eye />
			</button>
			<button
				class="button"
				title="Bắt đầu game đấu"
				@click="startGame">
				<Play />
			</button>
		</section>
	</div>
</template>

<style scoped>
	.sect {
		margin-bottom: 1rem;
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 3%;
	}
</style>
