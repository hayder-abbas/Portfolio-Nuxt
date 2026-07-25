<template>
	<div class="bio fi" v-fi="3">
		<p>
			Hey! I'm <span class="hi">Hayder Abbas</span>, a fullstack developer
			who loves turning ideas into production-ready web applications. I
			specialize in <span class="lv">Laravel</span> on the backend and
			<span class="hi">Vue.js</span> on the frontend — a pairing that lets
			me own the full lifecycle of a product.
		</p>
		<p>
			I care deeply about clean architecture, well-tested APIs, and
			interfaces that feel effortless to use. Whether it's a multi-tenant
			SaaS, a real-time dashboard, or a high-traffic e-commerce store, I
			build for the long term.
		</p>
		<p>
			I'm always learning, occasionally contributing to open source, and
			looking for challenging problems that push me to grow.
		</p>
	</div>
</template>

<style scoped>
.bio p {
	line-height: 1.85;
	font-size: 0.98rem;
}
.bio p + p {
	margin-top: 1rem;
}
.bio .hi {
	color: var(--green);
	font-weight: 500;
}
.bio .lv {
	color: var(--red);
	font-weight: 500;
}
</style>
