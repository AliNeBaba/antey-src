<template>
  <div
    class="carousel-3d-container"
    :style="{ height: this.slideHeight + 'px' }"
  >
    <div
      class="carousel-3d-slider"
      :style="{
        width: this.slideWidth + 'px',
        height: this.slideHeight + 'px',
      }"
    >
      <slot></slot>
    </div>
    <controls
      v-if="controlsVisible"
      :next-html="controlsNextHtml"
      :prev-html="controlsPrevHtml"
      :width="controlsWidth"
      :height="controlsHeight"
    ></controls>
  </div>
</template>

<script>
import Controls from "./ServicesControls.vue";

const noop = () => {};

export default {
  name: "Carousel",
  components: {
    Controls,
  },
  props: {
    numberOfSlides: {
      type: [Number, String],
      default: 0,
    },
    count: {
      type: [Number, String],
      default: 0,
    },
    perspective: {
      type: [Number, String],
      default: 35,
    },
    display: {
      type: [Number, String],
      default: 5,
    },
    loop: {
      type: Boolean,
      default: true,
    },
    animationSpeed: {
      type: [Number, String],
      default: 500,
    },
    dir: {
      type: String,
      default: "rtl",
    },
    width: {
      type: [Number, String],
      default: 360,
    },
    height: {
      type: [Number, String],
      default: 142,
    },
    border: {
      type: [Number, String],
      default: 1,
    },
    space: {
      type: [Number, String],
      default: "auto",
    },
    startIndex: {
      type: [Number, String],
      default: 0,
    },
    clickable: {
      type: Boolean,
      default: true,
    },
    disable3d: {
      type: Boolean,
      default: false,
    },
    minSwipeDistance: {
      type: Number,
      default: 10,
    },
    inverseScaling: {
      type: [Number, String],
      default: 300,
    },
    controlsVisible: {
      type: Boolean,
      default: true,
    },
    controlsPrevHtml: {
      type: String,
      default: "&lsaquo;",
    },
    controlsNextHtml: {
      type: String,
      default: "&rsaquo;",
    },
    controlsWidth: {
      type: [String, Number],
      default: 50,
    },
    controlsHeight: {
      type: [String, Number],
      default: 50,
    },
    onLastSlide: {
      type: Function,
      default: noop,
    },
    onSlideChange: {
      type: Function,
      default: noop,
    },
    bias: {
      type: String,
      default: "left",
    },
    onMainSlideClick: {
      type: Function,
      default: noop,
    },
    oneDirectional: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      viewport: 0,
      currentIndex: 0,
      total: 0,
      dragOffsetX: 0,
      dragStartX: 0,
      dragOffsetY: 0,
      dragStartY: 0,
      mousedown: false,
      zIndex: 998,
    };
  },
  emits: ["before-slide-change"],
  computed: {
    isLastSlide() {
      return this.currentIndex === this.total - 1;
    },
    isFirstSlide() {
      return this.currentIndex === 0;
    },
    isNextPossible() {
      return !(!this.loop && this.isLastSlide);
    },
    isPrevPossible() {
      return !(!this.loop && this.isFirstSlide);
    },
    slideWidth() {
      const vw = this.viewport;
      const sw = parseInt(this.width) + parseInt(this.border, 10) * 2;

      return vw < sw && process.browser ? vw : sw;
    },
    slideHeight() {
      const sw = parseInt(this.width, 10) + parseInt(this.border, 10) * 2;
      const sh = parseInt(parseInt(this.height) + this.border * 2, 10);
      const ar = this.calculateAspectRatio(sw, sh);

      return this.slideWidth / ar;
    },
    visible() {
      const v = this.display > this.total ? this.total : this.display;
      return v;
    },
    hasHiddenSlides() {
      return this.total > this.visible;
    },
    leftIndices() {
      let n = (this.visible - 1) / 2;

      n = this.bias.toLowerCase() === "left" ? Math.ceil(n) : Math.floor(n);

      const indices = [];

      for (let m = 1; m <= n; m++) {
        indices.push(
          this.dir === "ltr"
            ? (this.currentIndex + m) % this.total
            : (this.currentIndex - m) % this.total
        );
      }

      return indices;
    },
    rightIndices() {
      let n = (this.visible - 1) / 2;

      n = this.bias.toLowerCase() === "right" ? Math.ceil(n) : Math.floor(n);
      const indices = [];

      for (let m = 1; m <= n; m++) {
        indices.push(
          this.dir === "ltr"
            ? (this.currentIndex - m) % this.total
            : (this.currentIndex + m) % this.total
        );
      }

      return indices;
    },
    leftOutIndex() {
      let n = (this.visible - 1) / 2;

      n = this.bias.toLowerCase() === "left" ? Math.ceil(n) : Math.floor(n);
      n++;

      if (this.dir === "ltr") {
        return this.total - this.currentIndex - n <= 0
          ? -parseInt(this.total - this.currentIndex - n)
          : this.currentIndex + n;
      } else {
        return this.currentIndex - n;
      }
    },
    rightOutIndex() {
      let n = (this.visible - 1) / 2;

      n = this.bias.toLowerCase() === "right" ? Math.ceil(n) : Math.floor(n);
      n++;

      if (this.dir === "ltr") {
        return this.currentIndex - n;
      } else {
        return this.total - this.currentIndex - n <= 0
          ? -parseInt(this.total - this.currentIndex - n, 10)
          : this.currentIndex + n;
      }
    },
  },
  methods: {
    goNext() {
      if (this.isNextPossible) {
        this.isLastSlide
          ? this.goSlide(0)
          : this.goSlide(this.currentIndex + 1);
      }
    },
    goPrev() {
      if (this.isPrevPossible) {
        this.isFirstSlide
          ? this.goSlide(this.total - 1)
          : this.goSlide(this.currentIndex - 1);
      }
    },
    goSlide(index) {
      this.currentIndex = index < 0 || index > this.total - 1 ? 0 : index;

      if (this.isLastSlide) {
        if (this.onLastSlide !== noop) {
          console.warn("onLastSlide deprecated, please use @last-slide");
        }
        this.onLastSlide(this.currentIndex);
      }

      this.$emit("before-slide-change", this.currentIndex);

      setTimeout(() => this.animationEnd(), this.animationSpeed);
    },
    /**
     * Go to slide far slide
     */
    goFar(index) {
      let diff =
        index === this.total - 1 && this.isFirstSlide
          ? -1
          : index - this.currentIndex;

      if (this.isLastSlide && index === 0) {
        diff = 1;
      }

      const diff2 = diff < 0 ? -diff : diff;
      let timeBuff = 0;
      let i = 0;

      while (i < diff2) {
        i += 1;
        const timeout = diff2 === 1 ? 0 : timeBuff;

        setTimeout(
          () => (diff < 0 ? this.goPrev(diff2) : this.goNext(diff2)),
          timeout
        );

        timeBuff += this.animationSpeed / diff2;
      }
    },
    animationEnd() {
      if (this.onSlideChange !== noop) {
        console.warn(
          "onSlideChange deprecated, please use @after-slide-change"
        );
      }
      this.onSlideChange(this.currentIndex);
    },
    handleMouseup() {
      this.mousedown = false;
      this.dragOffsetX = 0;
      this.dragOffsetY = 0;
    },
    handleMousedown(e) {
      if (!e.touches) {
        e.preventDefault();
      }

      this.mousedown = true;
      this.dragStartX =
        "ontouchstart" in window ? e.touches[0].clientX : e.clientX;
      this.dragStartY =
        "ontouchstart" in window ? e.touches[0].clientY : e.clientY;
    },
    handleMousemove(e) {
      if (!this.mousedown) {
        return;
      }

      const eventPosX =
        "ontouchstart" in window ? e.touches[0].clientX : e.clientX;
      const eventPosY =
        "ontouchstart" in window ? e.touches[0].clientY : e.clientY;
      const deltaX = this.dragStartX - eventPosX;
      const deltaY = this.dragStartY - eventPosY;

      this.dragOffsetX = deltaX;
      this.dragOffsetY = deltaY;

      // If the swipe is more significant on the Y axis, do not move the slides because this is a scroll gesture
      if (Math.abs(this.dragOffsetY) > Math.abs(this.dragOffsetX)) {
        return;
      }

      if (this.dragOffsetX > this.minSwipeDistance) {
        this.handleMouseup();
        this.goNext();
      } else if (this.dragOffsetX < -this.minSwipeDistance) {
        this.handleMouseup();
        this.goPrev();
      }
    },
    calculateAspectRatio(width, height) {
      return Math.min(width / height);
    },
    computeData(firstRun) {
      this.total = this.numberOfSlides;
      if (firstRun || this.currentIndex >= this.total) {
        this.currentIndex =
          parseInt(this.startIndex) > this.total - 1
            ? this.total - 1
            : parseInt(this.startIndex);
      }

      this.viewport = document.querySelector(
        ".carousel-3d-container"
      ).clientWidth;
    },
    setSize() {
      document.querySelector(".carousel-3d-container").style.cssText +=
        "height:" + this.slideHeight + "px;";
      document.querySelector(
        ".carousel-3d-container"
      ).childNodes[0].style.cssText +=
        "width:" +
        this.slideWidth +
        "px;" +
        " height:" +
        this.slideHeight +
        "px;";
    },
  },

  mounted() {
    this.computeData(true);
    window.addEventListener("resize", this.setSize);

    if ("ontouchstart" in window) {
      document
        .getElementById("service")
        .addEventListener("touchstart", this.handleMousedown);
      document
        .getElementById("service")
        .addEventListener("touchend", this.handleMouseup);
      document
        .getElementById("service")
        .addEventListener("touchmove", this.handleMousemove);
    } else {
      document
        .getElementById("service")
        .addEventListener("mousedown", this.handleMousedown);
      document
        .getElementById("service")
        .addEventListener("mouseup", this.handleMouseup);
      document
        .getElementById("service")
        .addEventListener("mousemove", this.handleMousemove);
    }
  },

  beforeUnmount() {
    if ("ontouchstart" in window) {
      document
        .getElementById("service")
        .removeEventListener("touchmove", this.handleMousemove);
    } else {
      document
        .getElementById("service")
        .removeEventListener("mousemove", this.handleMousemove);
    }

    window.removeEventListener("resize", this.setSize);
  },
};
</script>

<style>
.carousel-3d-container {
  min-height: 1px;
  width: 100%;
  position: relative;
  margin-bottom: 1rem;
  z-index: 0;
  overflow: hidden;
  box-sizing: border-box;
}

.carousel-3d-slider {
  position: relative;
  margin: 0 auto;
  transform-style: preserve-3d;
  -webkit-perspective: 1000px;
  -moz-perspective: 1000px;
  perspective: 1000px;
}
</style>
