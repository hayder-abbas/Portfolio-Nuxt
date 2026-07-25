<script setup>
import Home from "./Pages/Home.vue";
</script>

<template>
	<!-- Orbs -->
	<div class="orb orb-r"></div>
	<div class="orb orb-g"></div>

	<Home />
</template>

<style scoped>
.orb {
	position: fixed;
	border-radius: 50%;
	filter: blur(130px);
	opacity: 0.1;
	pointer-events: none;
	z-index: 0;
}
.orb-r {
	width: 700px;
	height: 700px;
	background: var(--red);
	top: -250px;
	right: -250px;
}
.orb-g {
	width: 550px;
	height: 550px;
	background: var(--green);
	bottom: -150px;
	left: -200px;
}
</style>
