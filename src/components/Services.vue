<template>
  <section id="service" class="service">
    <h2>{{ currentService.header }}</h2>
      <services-carousel>
        <imgs-slide v-for="(item, i) in content" :index="i" :key="i">
          <img :src="item.imgURL">
        </imgs-slide>
      </services-carousel>
  </section>
</template>

<script>
import Carousel from "./ServicesCarousel.vue";
import Slide from "./ServicesSlide.vue";

export default {
  name: "Services",
  components: {
    "services-carousel": Carousel,
    "imgs-slide": Slide,
  },
  props: {
    content: {
      type: Object,
    },
  },
  data() {
    return {
      indexOfService: 0,
    };
  },
  computed: {
    currentService() {
      return this.content[this.indexOfService];
    },
  },
};
</script>

<style>
.service {
  height: 100vh;
  background-color: var(--red);
}
</style>
