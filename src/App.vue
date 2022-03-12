<template>
  <site-header id="header" />

  <main-loader v-if="showLoader" />

  <main v-else>
    <section-promo id="top-page" :content="content.promo" :ready="showLoader" />
    <section-services :content="content.services" />
    <section-video-monitoring
      id="video-monitoring"
      :content="content.videoMonitoring"
    />
    <section-about id="about" :content="content.about" />
  </main>

  <site-footer />
</template>

<script>
import Header from "./components/Header.vue";
import Promo from "./components/Promo.vue";
import Loader from "./components/Loader.vue";
import Services from "./components/Services.vue";
import Monitoring from "./components/VideoMonitoring.vue";
import About from "./components/About.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    "site-header": Header,
    "main-loader": Loader,
    "section-promo": Promo,
    "section-services": Services,
    "section-video-monitoring": Monitoring,
    "section-about": About,
    "site-footer": Footer,
  },
  data() {
    return {
      content: undefined,
      showLoader: true,
    };
  },
  created: function () {
    (async () => {
      this.content = await fetch("data/content.json")
        .then((response) => response.json())
        .then((data) => {
          data.promo.forEach((obj) => {
            obj.service.forEach((str, i, arr) => {
              arr[i] = str
                .split("")
                .map((s) => `<span>${s}</span>`)
                .join("");
            });
          });
          return data;
        });
      console.log(this.content);
    })();
  },
  watch: {
    content() {
      this.showLoader = false;
    },
  },
};
</script>

<style>
/* colors from palett 8 */
:root {
  --black: black;
  --white: white;
  --red: #e12d39;
  --grey: #9aa5b1;
  --lightgrey: #f5f7fa;
  --darkgrey: #50626d;
  --max-width: 70rem;
}
html {
  scroll-behavior: smooth;
}
@media screen and (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
a > *,
button > *,
p > * {
  pointer-events: none;
}
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--black);
  background-image: linear-gradient(
      to right,
      var(--black) 3%,
      transparent 30%,
      transparent 70%,
      var(--black) 97%
    ),
    url("~@/assets/general_background.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: auto 100%;
}
a {
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  padding: 0.2rem;
}
a:hover {
  transform: scale(1.1);
}
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.75rem;
}
h4,
h5 {
  text-align: center;
  text-transform: uppercase;
  max-width: 30rem;
  margin: 0 auto 0.75rem;
  color: var(--white);
  filter: drop-shadow(0 0 0.5rem var(--white));
}
p {
  padding: 0.75rem;
  text-align: center;
  color: var(--white);
  filter: drop-shadow(0 0 0.5rem var(--white));
}
</style>
