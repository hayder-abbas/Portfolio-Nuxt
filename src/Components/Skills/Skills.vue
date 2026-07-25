<script setup>
import { reactive } from "vue";
import Skill from "./Skill.vue";

const listSkills = reactive([
  {
    fi_index: 8,
    lable: "Backend",
    tagColor: "be",
    tags: [
      "PHP",
      "Laravel",
      "RESTful APIs",
      "Sanctum / JWT",
      "PHPUnit / Pest",
      "MySQL",
      "SQLite",
      "MongoDB",
    ],
  },
  {
    fi_index: 9,
    lable: "Frontend",
    tagColor: "fe",
    tags: [
      "Vue.js",
      "Nuxt.js",
      "JavaScript(ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    fi_index: 10,
    lable: "DevOps & Tools",
    tagColor: "dv",
    tags: ["Git", "GitHub", "Docker", "Postman", "Linux"],
  },
  {
    fi_index: 11,
    lable: "Core Concepts",
    tagColor: "cc",
    tags: [
      "MVC",
      "OOP",
      "SOLID",
      "Data Structures & Algorithms",
      "Database Design",
    ],
  },
]);
</script>

<template>
  <section id="skills">
    <p class="sec-eye fi" v-fi="5">// what I work with</p>
    <h2 class="sec-title fi" v-fi="6">Skills &amp; Stack</h2>
    <div class="divider fi" v-fi="7"></div>
    <!-- SKILLS -->
    <div class="skill-groups">
      <Skill v-for="skill in listSkills" :skill="skill" />
    </div>
  </section>
</template>

<style scoped>
.skill-groups {
  display: flex;
  flex-direction: column;
  gap: 2.75rem;
}
</style>
