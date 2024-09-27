<template>
	<div>{{ formattedTime }}</div>
</template>

<script>
	export default {
		props: {
			initialTime: {
				type: Number,
				required: true,
			},
		},
		data() {
			return {
				timeLeft: this.initialTime,
				timer: null,
			};
		},
		computed: {
			formattedTime() {
				const minutes = Math.floor(this.timeLeft / 60);
				const seconds = this.timeLeft % 60;
				return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
			},
		},
		beforeUnmount() {
			this.clearTimer();
		},
		methods: {
			startTimer() {
				this.timeLeft = this.initialTime;
				this.resumeTimer();
			},
			resumeTimer() {
				this.timer = setInterval(() => {
					if (this.timeLeft > 0) {
						this.timeLeft -= 1;
					} else {
						this.clearTimer();
						this.$emit('time-up');
					}
				}, 1000);
			},
			pauseTimer() {
				if (this.timer) {
					clearInterval(this.timer);
					this.timer = null;
				}
			},
			clearTimer() {
				if (this.timer) {
					clearInterval(this.timer);
					this.timer = null;
				}
			},
		},
	};
</script>

<style scoped>
	div {
		font-size: 1.2em;
		color: red;
	}
</style>
