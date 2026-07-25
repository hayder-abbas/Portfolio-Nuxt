<script setup>
import { onMounted, reactive, ref } from "vue";

// ── TERMINAL TYPEWRITER ──
const LINES = reactive([
	{
		html: '<span style="color:#42b883">❯</span> <span style="color:#f0f4ff">php artisan describe:dev hayder</span>',
	},
	{
		html: '<span style="color:#475569">  Name       </span><span style="color:#475569">→</span>  <span style="color:#42b883">"Hayder Abbas"</span>',
	},
	{
		html: '<span style="color:#475569">  Role       </span><span style="color:#475569">→</span>  <span style="color:#42b883">"Fullstack Developer"</span>',
	},
	{
		html: '<span style="color:#475569">  Backend    </span><span style="color:#475569">→</span>  <span style="color:#ff2d20">"Laravel · PHP · MySQL"</span>',
	},
	{
		html: '<span style="color:#475569">  Frontend   </span><span style="color:#475569">→</span>  <span style="color:#42b883">"Vue · Nuxt · Inertia"</span>',
	},
	{
		html: '<span style="color:#475569">  Status     </span><span style="color:#475569">→</span>  <span style="display: inline-flex;align-items: center;gap: 0.35rem;background: rgba(66, 184, 131, 0.12);border: 1px solid rgba(66, 184, 131, 0.3);color: var(--green);padding: 0.1rem 0.55rem;border-radius: 4px;font-size: 0.75rem;">✓ Available for hire</span>',
	},
]);

const tLines = reactive([]);
let i = ref(0);

function nextLine() {
	if (i.value >= LINES.length) return;
	tLines.push(LINES[i.value]);
	i.value++;
	setTimeout(nextLine, i.value === 1 ? 600 : 140);
}

onMounted(() => {
	setTimeout(nextLine, 900);
});
</script>

<template>
	<div class="terminal">
		<div class="t-header">
			<div class="dot d-r"></div>
			<div class="dot d-y"></div>
			<div class="dot d-g"></div>
			<span class="t-title">hayder@portfolio — zsh</span>
		</div>
		<div class="t-body">
			<div id="t-lines">
				<div v-for="line in tLines" v-html="line.html"></div>
			</div>
			<span class="cursor"></span>
		</div>
	</div>
</template>

<style scoped>
.terminal {
	width: 100%;
	max-width: 600px;
	background: var(--bg-term);
	border: 1px solid var(--border);
	border-radius: 12px;
	overflow: hidden;
	box-shadow:
		0 0 0 1px rgba(255, 255, 255, 0.04),
		0 24px 80px rgba(0, 0, 0, 0.55),
		0 0 60px rgba(66, 184, 131, 0.05);
	margin-bottom: 3rem;
}
.t-header {
	display: flex;
	align-items: center;
	gap: 0.45rem;
	padding: 0.75rem 1.1rem;
	background: rgba(255, 255, 255, 0.03);
	border-bottom: 1px solid var(--border);
}
.dot {
	width: 12px;
	height: 12px;
	border-radius: 50%;
}
.d-r {
	background: #ff5f57;
}
.d-y {
	background: #ffbd2e;
}
.d-g {
	background: #28c840;
}
.t-title {
	font-family: "JetBrains Mono", monospace;
	font-size: 0.68rem;
	color: var(--text-dim);
	margin-left: auto;
}
.t-body {
	padding: 1rem 1.1rem;
	font-family: "JetBrains Mono", monospace;
	font-size: 0.75rem;
	line-height: 2;
	min-height: 180px;
}
.cursor {
	display: inline-block;
	width: 8px;
	height: 15px;
	background: var(--green);
	vertical-align: middle;
	animation: blink 1s step-end infinite;
}

@keyframes blink {
	0%,
	100% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
}

@media (width >= 48rem) {
	.terminal {
		max-width: 100%;
	}
}

@media (width >= 64rem) {
	.terminal {
		flex: 1;
	}
	.t-body {
		padding: 1.25rem 1.5rem;
		font-size: 0.82rem;
	}
}
</style>
