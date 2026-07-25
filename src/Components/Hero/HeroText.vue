<script setup lang="ts">
import ExpandLeftRightIcon from "../Icons/ExpandLeftRightIcon.vue";
import MailIcon from "../Icons/MailIcon.vue";
</script>

<template>
	<div class="hero-text">
		<!-- Eyebrow -->
		<p class="eyebrow">
			// open to freelance &amp; full-time opportunities
		</p>

		<!-- Hero Name -->
		<h1 class="hero-name">Hayder<br /><span class="acc">Abbas</span></h1>

		<!-- Hero Tag -->
		<p class="hero-tag">
			I build beautiful, responsive web applications with modern
			technologies
		</p>

		<!-- CTAS -->
		<div class="ctas">
			<a href="#projects" class="btn-p">
				<ExpandLeftRightIcon class="svg" />
				View Projects
			</a>
			<a href="mailto:haydar.abbas41@gmail.com" class="btn-s">
				<MailIcon class="svg" />
				Get in Touch
			</a>
		</div>
	</div>
</template>

<style scoped>
.eyebrow {
	font-family: "JetBrains Mono", monospace;
	font-size: 0.78rem;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: var(--green);
	margin-bottom: 1rem;
}
.hero-name {
	font-family: "JetBrains Mono", monospace;
	font-size: clamp(3rem, 7.5vw, 5.5rem);
	font-weight: 800;
	line-height: 1.04;
	letter-spacing: -0.03em;
	color: var(--heading);
	margin-bottom: 1.1rem;
}
.hero-name .acc {
	color: var(--red);
}
.hero-tag {
	font-size: 1.15rem;
	font-weight: 300;
	color: var(--text);
	max-width: 480px;
	margin-bottom: 2.5rem;
	line-height: 1.6;
}
.ctas {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	flex-wrap: wrap;
}

.ctas .svg {
	width: 1rem;
	height: 1rem;
}

@media (width >= 40rem) {
	#hero .ctas {
		flex-direction: row;
	}
}

@media (width >= 64rem) {
	#hero .hero-text {
		flex: 1;
	}
}
</style>
