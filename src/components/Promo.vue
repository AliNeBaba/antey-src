<template>
  <section id="top-page" class="promo">
    <div class="promo__container">
      <p v-html="currentPage.general_info" class="promo__general__info"></p>
      <img :src="currentPage.img" :alt="currentPage.alt" class="promo__img" />
      <p v-html="currentContent(1)" class="promo__service__1"></p>
      <p v-html="currentContent(2)" class="promo__service__2"></p>
      <p v-html="currentContent(3)" class="promo__service__3"></p>
    </div>
    <a href="#service"></a>
  </section>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Promo",
  props: ["content"],
  data() {
    return {
      page: 0,
    };
  },
  mounted: function () {
    setInterval(this.nextPage, 8000);
    gsap.from(".promo__general__info", {
      transform: "scale(0)",
      duration: 0.3,
      ease: "back.out(1.2)",
    });
    gsap.from(".promo__img", {
      duration: 0.3,
      opacity: 0,
    });
    gsap.from(".promo span", {
      opacity: 0,
      top: "1rem",
      right: "0.2rem",
      ease: "back.out(5)",
      stagger: 0.06,
    });
  },
  computed: {
    currentPage() {
      return this.content[this.page];
    },
  },
  methods: {
    nextPage() {
      gsap.to(".promo__general__info", {
        transform: "scale(0)",
        duration: 0.3,
        ease: "back.in(1.2)",
      });
      gsap.to(".promo__img", {
        duration: 0.3,
        opacity: 0,
      });
      gsap.to(".promo span", {
        duration: 0.3,
        opacity: 0,
        onComplete: () => {
          this.page === this.content.length - 1 ? (this.page = 0) : ++this.page;
        },
      });
      gsap.set(".promo span", {
        top: "1rem",
        right: "0.2rem",
      });
    },
    currentContent(target) {
      return this.currentPage[`service_${target}`]
        .split("")
        .map((s) => `<span>${s}</span>`)
        .join("");
    },
  },
  watch: {
    page() {
      gsap.to(".promo__general__info", {
        transform: "scale(1)",
        duration: 0.3,
        ease: "back.out(1.2)",
      });
      gsap.to(".promo__img", {
        duration: 0.3,
        opacity: 1,
      });
      gsap.to(".promo span", {
        opacity: 0,
        top: "1rem",
        right: "0.2rem",
        ease: "back.out(1.2)",
        stagger: 0.05,
      });
    },
  },
};
</script>

<style>
.promo {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
.promo__container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 85vh;
  padding-top: 1rem;
}
.promo p {
  padding: 1rem;
  text-align: center;
  color: var(--white);
  line-height: 1.6;
  text-transform: uppercase;
}
.promo__img {
  width: 90%;
  box-shadow: 0 0 0.5rem var(--red);
  max-width: 30rem;
  transition: all 0.3s linear;
}
.promo__service__1,
.promo__service__2,
.promo__service__3 {
  font-size: 1.4rem;
  font-weight: bold;
  transform: rotate(-5deg) skew(-15deg);
  text-shadow: var(--red) 1px 1px, var(--red) 2px 2px, var(--red) 3px 3px,
    var(--red) 4px 4px;
}
.promo__service__1 span,
.promo__service__2 span,
.promo__service__3 span {
  position: relative;
}
.promo a {
  background: transparent;
  border: none;
  margin-bottom: 1rem;
  animation: 2s ease-in-out 3s infinite button-pulse;
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
  45% {
    transform: translateY(0.5rem) scale(0.9);
  }
  50% {
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
}
</style>
