<script setup>
import GithubIconAlt from "./Icons/GithubIconAlt.vue";
import LinkedinIcon from "./Icons/LinkedinIcon.vue";
import TwitterIcon from "./Icons/TwitterIcon.vue";
</script>

<template>
  <footer>
    <div class="framer">
      <p class="framer-text">
        Designed &amp; built by
        <span class="framer-name">Hayder Abbas</span>
        © {{ new Date().getFullYear() }}
      </p>
    </div>

    <div class="social-media">
      <!-- Github -->
      <div>
        <a href="https://github.com/hayder-abbas" target="_blank">
          <GithubIconAlt />
        </a>
      </div>
      <!-- Linkedin -->
      <div>
        <a href="https://www.linkedin.com/in/hayderabbas" target="_blank">
          <LinkedinIcon />
        </a>
      </div>
      <!-- X (Twitter) -->
      <div>
        <a href="https://x.com/h_a_dev" target="_blank">
          <TwitterIcon />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  position: relative;
  z-index: 1;
  border-top: 1px solid var(--border);
  padding: 2rem 1.25rem;
  text-align: center;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.72rem;
  color: var(--text-dim);
}
footer .framer {
  padding: 1rem;
}
footer .framer-name {
  color: var(--green);
}
footer .social-media {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}
footer .social-media svg {
  color: var(--text-dim);
  width: 1.5rem;
}

@media (width >= 48rem) {
  footer {
    font-size: 1rem;
  }
}

@media (width >= 64rem) {
  footer {
    display: flex;
    justify-content: space-around;
    padding: 2rem 2.25rem;
  }
  footer .framer-text {
    text-align: start;
  }
}
</style>
