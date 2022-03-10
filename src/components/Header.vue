<template>
  <header class="header">
    <div class="wrapper">
      <a class="header__logo" href="#top__page">
        <antey-logo />
      </a>
      <a class="header__phone" href="tel:+79282730700">
        <transition-group name="letters">
          <span v-for="letter in to" :key="letter" class="letter">
            {{ letter }}
          </span>
        </transition-group>
      </a>
      <nav class="header__nav">
        <a href="#service">Услуги</a>
        <a href="#video-monitoring">Камеры</a>
        <a href="#about">О нас</a>
      </nav>
    </div>
  </header>
</template>

<script>
import AnteyLogo from "./SVG/AnteyLogo.vue";

export default {
  name: "Header",
  components: {
    "antey-logo": AnteyLogo,
  },
  data() {
    return {
      from: {
        tel: "+7 (928) 273-07-00",
        msg: "Клиентский отдел: ",
      },
      to: [],
      interval: 0,
      contentToLoad: undefined,
      index: 0,
      lastYPosition: 0,
    };
  },
  created() {
    this.to = this.from.tel.split("");
    this.contentToLoad = "msg";
  },
  mounted() {
    setTimeout(this.loadNext, 9000);
    window.addEventListener(
      "scroll",
      function () {
        let position = window.pageYOffset || document.documentElement.scrollTop;
        if (position > this.lastYPosition) {
          document.getElementById("header").style.top = "-100%";
        } else {
          document.getElementById("header").style.top = "0";
        }
        this.lastYPosition = position;
      },
      false
    );
  },
  computed: {},
  methods: {
    loadNext() {
      this.interval = setInterval(this.loadStep, 80);
    },
    loadStep() {
      if (this.index < 18) {
        this.to.splice(
          this.index,
          1,
          this.from[this.contentToLoad][this.index]
        );
        ++this.index;
      } else {
        this.index = 0;
        this.contentToLoad = this.contentToLoad === "tel" ? "msg" : "tel";
        clearInterval(this.interval);
        setTimeout(this.loadNext, 6000);
      }
    },
  },
};
</script>

<style>
.letter {
  display: inline-block;
  white-space: pre;
  transition: all 2s ease;
}
.letters-enter-from {
  opacity: 0;
  transform: translateY(0.5rem);
}
.letters-leave-to {
  opacity: 0;
  transform: translateY(-0.5rem);
}
.letters-enter-active {
  transition: all 0.2s ease-out;
}
.letters-leave-active {
  position: absolute;
  transition: all 0.2s ease-in;
}
.header {
  position: fixed;
  top: 0;
  width: 100%;
  transition: top 1s;
}
.wrapper {
  width: 100%;
  max-width: var(--max-width);
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0.5rem;
}
.header__logo {
  width: calc(100% / 12 * 2);
  align-self: flex-start;
}
.header__phone {
  color: var(--red);
  align-self: flex-start;
  padding: 0.2rem;
}
.header__nav a {
  color: var(--lightgrey);
  font-size: 0.8rem;
}

a,
svg path {
  transition: all 0.3s;
}
a.header__logo:hover .shield__path {
  filter: drop-shadow(0 0 0.5rem var(--red));
}
a.header__logo:hover .text__path {
  filter: drop-shadow(0 0 0.5rem var(--white));
}
.header__nav a:hover {
  color: var(--white);
  filter: drop-shadow(0 0 0.4rem var(--white));
}
a.header__phone {
  display: block;
  text-transform: none;
}
a.header__phone:hover {
  filter: drop-shadow(0 0 0.4rem var(--red));
}

@media (min-width: 568px) {
  header {
    justify-content: flex-start;
  }
  .header__logo {
    width: calc(100% / 12);
  }
  a {
    font-size: 1rem;
  }
  .header__phone {
    margin-left: 3rem;
    margin-right: auto;
  }
  .header__nav {
    display: flex;
  }
  .header__nav a {
    padding-left: 0.8rem;
    padding-right: 0.8rem;
  }
}
</style>
