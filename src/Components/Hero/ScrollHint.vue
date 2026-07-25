<template>
	<div class="scroll-hint">
		<span>scroll</span>
		<div class="scroll-line"></div>
	</div>
</template>

<style scoped>
.scroll-hint {
	position: absolute;
	bottom: 2.5rem;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
	font-family: "JetBrains Mono", monospace;
	font-size: 0.65rem;
	letter-spacing: 0.12em;
	color: var(--text-dim);
	visibility: hidden;
}
.scroll-line {
	width: 1px;
	height: 44px;
	background: linear-gradient(to bottom, var(--green), transparent);
	animation: slide 1.6s ease-in-out infinite;
}
@keyframes slide {
	0%,
	100% {
		opacity: 0.3;
		transform: scaleY(0.9);
	}
	55% {
		opacity: 1;
		transform: scaleY(1.1);
	}
}

@media (width >= 48rem) {
	.scroll-hint {
		visibility: visible;
	}
}
</style>
