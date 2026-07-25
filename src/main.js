import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/main.css";

const app = createApp(App);

app.directive("fi", {
    mounted(el, { value: idx = 0 }) {
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => el.classList.add("vis"), idx * 55);
                    obs.disconnect();
                }
            },
            { threshold: 0.08 },
        );
        obs.observe(el);
    },
});

app.mount("#app");
