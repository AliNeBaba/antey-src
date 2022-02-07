<template>
  <section id="service" class="service">
    <h4>{{ currentService.header }}</h4>
    <services-carousel
      v-show="!showCalculator"
      @before-slide-change="changeContent($event)"
      :number-of-slides="content.items.length"
    >
      <imgs-slide v-for="(item, i) in content.items" :index="i" :key="i">
        <img :src="item.imgSrc" :alt="item.imgAlt" />
      </imgs-slide>
    </services-carousel>
    <div class="service__container">
      <p v-show="!showCalculator">{{ currentService.description }}</p>
      <ul v-show="!showCalculator">
        <li v-for="item in currentService.properties" :key="item">
          {{ item }}
        </li>
      </ul>
      <div v-if="showCalculator" class="service__container__calculator">
        <p>{{ content.calcInfo.forSecondary }}</p>
        <p>{{ content.calcInfo.instruction }}</p>
        <div v-for="job in currentService.price" :key="job">
          <h5>{{ job.title }}</h5>
          <p class="calculator__price">&#8381; {{ job.service }}</p>
          <calc-buttons
            :price="job.service"
            @changeCalc="calcTotal($event, job)"
          />
        </div>
        <p>{{ content.calcInfo.info }}</p>
        <p class="calculator__price">Работ на сумму: {{ totalJobs }}</p>
        <p class="calculator__price">Оборудование (min): {{ minEquipments }}</p>
        <p class="calculator__price">Оборудование (max): {{ maxEquipments }}</p>
      </div>
      <button
        @click="showCalculator = !showCalculator"
        :class="{ service__move__button: showCalculator }"
        type="button"
      >
        <template v-if="!showCalculator">Калькулятор</template>
        <template v-else>&#x2718;</template>
      </button>
    </div>
  </section>
</template>

<script>
import Carousel from "./ServicesCarousel.vue";
import Slide from "./ServicesSlide.vue";
import CalcButtons from "./ServicesCalcButtons.vue";
import gsap from "gsap";

export default {
  name: "Services",
  components: {
    "services-carousel": Carousel,
    "imgs-slide": Slide,
    "calc-buttons": CalcButtons,
  },
  props: {
    content: {
      type: Object,
    },
  },
  data() {
    return {
      indexOfService: 0,
      showCalculator: false,
      totalJobs: 0,
      minEquipments: 0,
      maxEquipments: 0,
    };
  },
  computed: {
    currentService() {
      return this.content.items[this.indexOfService];
    },
  },
  methods: {
    changeContent(target) {
      gsap
        .timeline()
        .to(".service h4", {
          opacity: 0,
          duration: 0.1,
          onComplete: () => {
            this.indexOfService = target;
          },
        })
        .to(".service h4", {
          opacity: 1,
          duration: 0.3,
        });
    },
    calcTotal(action, data) {
      if(action === "add") {
        this.totalJobs += data.service;
        this.minEquipments += data.minEquipment;
        this.maxEquipments += data.maxEquipment;
      } else {
        this.totalJobs -= data.service;
        this.minEquipments -= data.minEquipment;
        this.maxEquipments -= data.maxEquipment;
      }
    },
  },
};
</script>

<style>
.service {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0.75rem;
}
.service h4,
.service h5 {
  text-align: center;
  text-transform: uppercase;
  max-width: 30rem;
  margin: 0 auto 1rem;
  color: var(--white);
  filter: drop-shadow(0 0 0.5rem var(--white));
}
.service__container {
  position: relative;
  display: flex;
  overflow-y: auto;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  backdrop-filter: blur(10px);
  padding: 1rem;
  border: solid 1px var(--white);
}
.service__container::after {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: var(--black);
  opacity: 0.7;
}
.service__container p,
.service__container li,
.service__container span {
  text-align: center;
  color: var(--white);
  font-size: 0.9rem;
  filter: drop-shadow(0 0 0.5rem var(--red));
}
.service__container ul {
  padding-left: 2rem;
}
.service__container button {
  position: relative;
  text-transform: uppercase;
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  background: transparent;
  background-color: var(--red);
  background-image: linear-gradient(#ab091e, #e12d39, #f86a6a);
  border: none;
  border-radius: 1rem;
  box-shadow: inset 0.1rem var(--white);
  transition: all 0.3s ease;
}
.service__container button::before {
  position: absolute;
  top: 0;
  left: 2%;
  content: " ";
  width: 96%;
  height: 1rem;
  border-radius: 0.5rem;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0)
  );
}
.service__container button:hover {
  transform: scale(1.05);
  filter: drop-shadow(0 0 0.5rem var(--white));
  cursor: pointer;
}
.service__container button:active {
  transform: scale(0.95);
  cursor: pointer;
}
.service__container .service__move__button {
  order: -1;
  width: 2rem;
  align-self: flex-end;
  flex-shrink: 0;
  transition: all 0.3s ease;
}
.service__container .service__move__button::before {
  width: 50%;
  left: 25%;
}
.service__container__calculator p,
.service__container__calculator div {
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}
.service__container__calculator > div {
  border-bottom: solid 1px var(--white);
  padding-top: 1rem;
  transition: all 0.3s ease;
}
.service__container .calculator__price {
  font-weight: bold;
  font-size: 1.2rem;
  font-style: italic;
  transition: all 0.3s ease;
}
</style>
