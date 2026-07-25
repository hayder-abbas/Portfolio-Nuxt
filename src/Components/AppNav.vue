<script setup>
import { onMounted, onUnmounted } from "vue";

const handleScroll = () => {
	document.getElementById("nav").classList.toggle("scrolled", scrollY > 50);
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<template>
	<nav id="nav">
		<a href="#hero" class="nav-logo">hayder<em>.</em>dev</a>
		<ul class="nav-links">
			<li><a href="#about">about</a></li>
			<li><a href="#skills">skills</a></li>
			<li><a href="#projects">projects</a></li>
			<!-- <li><a href="#contact">contact</a></li> -->
		</ul>
	</nav>
</template>

<style scoped>
nav {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 100;
	padding: 1rem 1.25rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid transparent;
	transition:
		background 0.3s,
		border-color 0.3s,
		backdrop-filter 0.3s;
}
nav.scrolled {
	background: rgba(10, 14, 26, 0.9);
	backdrop-filter: blur(16px);
	border-bottom-color: var(--border);
}
.nav-logo {
	font-family: "JetBrains Mono", monospace;
	font-weight: 800;
	font-size: 1.05rem;
	color: var(--heading);
	text-decoration: none;
	letter-spacing: -0.02em;
}
.nav-logo em {
	color: var(--red);
	font-style: normal;
}
.nav-links {
	display: none;
	gap: 2.5rem;
	list-style: none;
}
.nav-links a {
	font-family: "JetBrains Mono", monospace;
	font-size: 0.78rem;
	letter-spacing: 0.08em;
	color: var(--text-dim);
	text-decoration: none;
	transition: color 0.2s;
}
.nav-links a:hover {
	color: var(--green);
}

@media (width >= 48rem) {
	.nav-links {
		display: flex;
	}
}

@media (width >= 64rem) {
	nav {
		padding: 1.25rem 2.5rem;
	}
}
</style>
