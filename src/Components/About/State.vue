<template>
  <div class="stats fi" v-fi="4">
    <div class="stat-card">
      <div class="stat-num">3<sup>+</sup></div>
      <div class="stat-lbl">Years of Experience</div>
    </div>
    <div class="stat-card">
      <!-- <div class="stat-num">30<sup>+</sup></div>
      <div class="stat-lbl">Projects Delivered</div> -->
    </div>
    <div class="stat-card">
      <!-- <div class="stat-num">15<sup>+</sup></div>
      <div class="stat-lbl">Happy Clients</div> -->
    </div>
    <div class="stat-card">
      <div class="stat-num">130<sup>+</sup></div>
      <div class="stat-lbl">Commits This Year</div>
    </div>
  </div>
</template>

<style scoped>
.stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}
.stat-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1.5rem;
  transition: all 0.3s;
}
.stat-card:hover {
  border-color: rgba(66, 184, 131, 0.4);
  box-shadow: 0 0 24px rgba(66, 184, 131, 0.08);
  transform: translateY(-3px);
}
.stat-num {
  font-family: "JetBrains Mono", monospace;
  font-size: 2.3rem;
  font-weight: 800;
  color: var(--heading);
  line-height: 1;
}
.stat-num sup {
  color: var(--red);
  font-size: 1.2rem;
}
.stat-lbl {
  font-size: 0.75rem;
  color: var(--text-dim);
  margin-top: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

@media (width >= 48rem) {
  .stats {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
