<script setup>
import ExternalLinkIcon from "../Icons/ExternalLinkIcon.vue";
import GithubIcon from "../Icons/GithubIcon.vue";

defineProps({
  project: Object,
});
</script>

<template>
  <div class="proj-card fi" v-fi="project.fi_index">
    <div class="proj-name">{{ project.name }}</div>
    <div class="proj-desc">
      {{ project.desc }}
    </div>
    <div class="pills">
      <span class="pill" :class="skill.color" v-for="skill in project.skills">
        {{ skill.name }}
      </span>
    </div>
    <div class="proj-links">
      <a :href="project.live" class="plink" target="blank">
        <ExternalLinkIcon class="svg" />
        Live Demo
      </a>
      <a :href="project.github" class="plink" target="blank">
        <GithubIcon class="svg" />
        GitHub
      </a>
    </div>
  </div>
</template>

<style scoped>
.proj-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
}
.proj-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background-color: var(--red);
  opacity: 0;
  transition: opacity 0.3s;
}
.proj-card:hover {
  border-color: rgba(66, 184, 131, 0.25);
  transform: translateY(-5px);
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.35);
}
.proj-card:hover::before {
  opacity: 1;
}
.proj-name {
  font-family: "JetBrains Mono", monospace;
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--heading);
  margin-bottom: 0.5rem;
}
.proj-desc {
  font-size: 0.9rem;
  line-height: 1.75;
  color: var(--text);
  flex: 1;
  margin-bottom: 1.25rem;
}
.pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.25rem;
}
.pill {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.7rem;
  padding: 0.18rem 0.6rem;
  border-radius: 4px;
  border: 1px solid;
}
.pill.be {
  background: rgba(255, 45, 32, 0.1);
  color: var(--red);
  border-color: rgba(255, 45, 32, 0.25);
}
.pill.fe {
  background: rgba(66, 184, 131, 0.1);
  color: var(--green);
  border-color: rgba(66, 184, 131, 0.25);
}
.pill.nt {
  background: rgba(148, 163, 184, 0.07);
  color: var(--text-dim);
  border-color: var(--border);
}
.proj-links {
  display: flex;
  gap: 0.85rem;
}
.plink {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.73rem;
  color: var(--text-dim);
  text-decoration: none;
  transition: color 0.2s;
}
.plink:hover {
  color: var(--green);
}
.svg {
  width: 12px;
  height: 12px;
}
</style>
