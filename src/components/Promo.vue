<template>
  <section class="promo">
    <div class="promo__container">
      <p v-html="currentPage.generalInfo" class="promo__general__info"></p>
      <img :src="currentPage.img" :alt="currentPage.alt" class="promo__img" />
      <transition-group appear @enter="enter" :css="false">
        <p
          v-for="service in currentPage.service"
          v-html="replaceContent(service)"
          :key="service"
          class="promo__service"
        ></p>
      </transition-group>
    </div>
    <a href="#service"></a>
  </section>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "Promo",
  props: ["content"],
  data() {
    return {
      page: 0,
    };
  },
  mounted: function () {
    this.animationStep();
  },
  computed: {
    currentPage() {
      return this.content[this.page];
    },
  },
  methods: {
    nextPage() {
      this.page === this.content.length - 1 ? (this.page = 0) : ++this.page;
    },
    replaceContent(target) {
      return target
        .split("")
        .map((s) => `<span>${s}</span>`)
        .join("");
    },
    nextStep() {
      window.removeEventListener("scroll", this.nextStep);
      if (window.pageYOffset) {
        window.addEventListener("scroll", this.nextStep);
      } else {
        setTimeout(() => {
          this.nextPage();
          this.animationStep();
        }, 300);
      }
    },
    animationStep() {
      gsap
        .timeline()
        .fromTo(
          ".promo__general__info",
          {
            transform: "scale(0)",
          },
          {
            transform: "scale(1)",
            ease: "back.out(1.2)",
            duration: 0.3,
          }
        )
        .fromTo(
          ".promo__img",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.4,
          },
          "<"
        )
        .fromTo(
          ".promo__general__info",
          {
            transform: "scale(1)",
          },
          {
            duration: 0.2,
            transform: "scale(0)",
            ease: "back.in(1.2)",
          },
          "+=8"
        )
        .fromTo(
          ".promo__img",
          {
            opacity: 1,
            transform: "scale(1)",
          },
          {
            duration: 0.2,
            opacity: 0,
            transform: "scale(0.9)",
            onComplete: () => {
              this.nextStep();
            },
          }
        );
    },
    enter() {
      gsap
        .timeline()
        .fromTo(
          ".promo__service span",
          {
            opacity: 0,
            top: "1.3rem",
            right: "-0.6rem",
          },
          {
            duration: 0.5,
            opacity: 1,
            top: 0,
            right: 0,
            ease: "back.out(5)",
            stagger: 0.01,
          }
        )
        .to(
          ".promo__service span",
          {
            duration: 0.2,
            opacity: 0,
            transform: "scale(0.9)",
          },
          "+=7.4"
        );
    },
  },
};
</script>

<style>
.promo {
  height: 100vh;
  justify-content: flex-end;
}
.promo__container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 85vh;
  padding-top: 2rem;
}
.promo p {
  text-align: center;
  color: var(--white);
  line-height: 1.6;
  text-transform: uppercase;
  font-weight: bold;
  width: 80%;
}
.promo__general__info {
  filter: drop-shadow(0 0 0.7rem var(--white));
}
.promo__img {
  max-width: 90%;
  box-shadow: 0 0 0.5rem var(--red);
}
.promo__service {
  transform: rotate(-5deg) skew(-15deg);
  filter: drop-shadow(0 0 0.4rem var(--red));
}
.promo__service span {
  position: relative;
}
.promo a {
  background: transparent;
  border: none;
  margin-bottom: 1rem;
  animation: 5s ease-in-out 3s infinite button-pulse;
}
.promo a:hover {
  filter: drop-shadow(0 0 0.4rem var(--red));
  transform: scale(1.1);
  animation-play-state: paused;
}
.promo a::after {
  content: " ";
  display: block;
  width: 2rem;
  height: 2rem;
  border-bottom: solid 0.2rem var(--red);
  border-right: solid 0.2rem var(--red);
  transform: rotate(45deg);
}
@keyframes button-pulse {
  5% {
    transform: translateY(-0.5rem) scale(1.1);
  }
  25% {
    transform: translateY(0.5rem) scale(0.9);
  }
  30% {
    transform: translateY(0) scale(1);
  }
}
@media (min-width: 568px) {
  .promo p:first-child {
    font-size: 1.2rem;
  }
  .promo p:not(:first-child) {
    font-size: 1.5rem;
  }
  .promo__img {
    max-width: 30rem;
  }
}
</style>
