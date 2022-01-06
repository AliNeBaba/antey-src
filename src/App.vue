<template>
  <site-header />

  <main-loader v-if="showLoader" />
  <main v-else>
    <section-promo :content="content.promo" />
    <section id="service" class="service"></section>
    <section id="video__monitoring__online" class="video__monitoring"></section>
    <section id="about" class="about"></section>
  </main>

  <footer></footer>
</template>

<script>
import Header from "./components/Header.vue";
import Promo from "./components/Promo.vue";
import Loader from "./components/Loader.vue";

export default {
  name: "App",
  components: {
    "site-header": Header,
    "section-promo": Promo,
    "main-loader": Loader,
  },
  data() {
    return {
      content: undefined,
      showLoader: true,
    };
  },
  mounted: function () {
    (async () => {
      this.content = await fetch("data/content.json").then((response) =>
        response.json()
      );
    })();
  },
  watch: {
    content() {
      setTimeout(() => {
        this.showLoader = false;
      }, 1000);
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
button > * {
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
main {
  min-height: 100vh;
}
.service {
  height: 100vh;
  background-color: red;
}
</style>
