<script setup>
import HeroText from "./HeroText.vue";
import ScrollHint from "./ScrollHint.vue";
import Terminal from "./Terminal.vue";
</script>

<template>
	<div id="hero">
		<!-- Terminal -->
		<Terminal />

		<!-- Hero Text -->
		<HeroText />

		<!-- Scroll Hint -->
		<ScrollHint />
	</div>
</template>

<style scoped>
#hero {
	position: relative;
	z-index: 1;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 6rem 1.25rem 4rem;
	max-width: 1100px;
	margin: 0 auto;
}

@media (width >= 64rem) {
	#hero {
		flex-direction: row-reverse;
		padding: 8rem 2.5rem 4rem;
	}
}
</style>
