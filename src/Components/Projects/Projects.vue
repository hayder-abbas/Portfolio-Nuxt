<script setup>
import { reactive } from "vue";
import ProjectCard from "./ProjectCard.vue";

const projects = reactive([
  {
    fi_index: 15,
    name: "YourMenuPage",
    desc: "A full-stack single-page application (SPA) built with Laravel, Inertia.js, and Vue.js. Implements secure authentication using Laravel Sanctum and utilizes SQLite as the database. Designed as a scalable online menu platform for restaurants and coffee shops.",
    skills: [
      { name: "Laravel", color: "be" },
      { name: "Inertia.js", color: "be" },
      { name: "Vue.js", color: "fe" },
      { name: "Tailwind", color: "fe" },
      { name: "MySQL", color: "nt" },
      { name: "Docker", color: "nt" },
    ],
    live: "#",
    github: "https://github.com/hayder-abbas/yourmenupage-inertia.js",
  },
  {
    fi_index: 16,
    name: "Hisouby | حيسوبي",
    desc: "A full-stack single-page application (SPA) developed with Nuxt.js, utilizing Firebase Firestore as the database and deployed on Firebase Hosting. Designed as an interactive learning platform to train students in mathematics from elementary to high school levels.",
    skills: [
      { name: "Nuxt.js", color: "fe" },
      { name: "Tailwind", color: "fe" },
      { name: "Firebase", color: "be" },
    ],
    live: "https://hisouby.web.app/",
    github: "https://github.com/hayder-abbas/hisouby-nuxt3",
  },
]);
</script>

<template>
  <section id="projects">
    <p class="sec-eye fi" v-fi="12">// what I've built</p>
    <h2 class="sec-title fi" v-fi="13">Featured Projects</h2>
    <div class="divider fi" v-fi="14"></div>
    <!-- PROJECTS -->
    <div class="proj-grid">
      <ProjectCard v-for="project in projects" :project="project" />
    </div>
  </section>
</template>

<style scoped>
.proj-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (width >= 64rem) {
  .proj-grid {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }
}
</style>
