<script setup>
import Bio from "./Bio.vue";
import State from "./State.vue";
</script>

<template>
	<section id="about">
		<p class="sec-eye fi" v-fi="0">// who I am</p>
		<h2 class="sec-title fi" v-fi="1">About Me</h2>
		<div class="divider fi" v-fi="2"></div>
		<div class="about-grid">
			<!-- Bio -->
			<Bio />

			<!-- State -->
			<State />
		</div>
	</section>
</template>

<style scoped>
.about-grid {
	display: grid;
	grid-template-columns: 1fr;
	gap: 2.5rem;
	align-items: center;
}

@media (width >= 64rem) {
	.about-grid {
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
	}
}
</style>
