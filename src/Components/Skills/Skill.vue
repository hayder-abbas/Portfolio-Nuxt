<script setup>
defineProps({
  skill: Object,
});
</script>

<template>
  <div class="fi" v-fi="skill.fi_index">
    <div class="group-label">{{ skill.lable }}</div>
    <div class="tags">
      <span class="tag" :class="skill.tagColor" v-for="tag in skill.tags">
        <span class="pip"></span>
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.group-label {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.72rem;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.group-label::after {
  content: "";
  flex: 1;
  height: 1px;
  background: var(--border);
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}
.tag {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text);
  padding: 0.42rem 1rem;
  border-radius: 6px;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.78rem;
  cursor: default;
  transition: all 0.22s;
}
.tag:hover {
  transform: translateY(-2px);
}
.tag .pip {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}
.tag.be:hover {
  border-color: var(--red);
  color: var(--red);
  background: rgba(255, 45, 32, 0.06);
}
.tag.be .pip {
  background: var(--red);
}
.tag.fe:hover {
  border-color: var(--green);
  color: var(--green);
  background: rgba(66, 184, 131, 0.06);
}
.tag.fe .pip {
  background: var(--green);
}
.tag.dv:hover {
  border-color: #818cf8;
  color: #818cf8;
  background: rgba(129, 140, 248, 0.06);
}
.tag.dv .pip {
  background: #818cf8;
}
.tag.cc:hover {
  border-color: #94a3b8;
  color: #94a3b8;
  background: rgba(129, 140, 248, 0.06);
}
.tag.cc .pip {
  background: #94a3b8;
}
</style>
