<template>
  <path class="svg-fill-red" d="M325.3 52.5L323 51C324.5 48.8 324.5 48 326.8 42V42C327.5 39.8 327.5 39.8 327.5 37.5C327.5 35.3 328.3 32.3 330.5 30.8C333.5 30 335.8 28.5 335 35.3C332 59.3 333.5 66.8 336.5 67.5C338.8 67.5 343.3 64.5 349.3 49.5L351.5 51C350 55.5 341 74.3 334.3 73.5C328.3 72.8 325.3 66 326.8 49.5L325.3 52.5Z"/>
  <path class="svg-fill-red" d="M333.5 24C336 24 338 22 338 19.5C338 17 336 15 333.5 15C331 15 329 17 329 19.5C329 22 331 24 333.5 24Z"/>
  <path id="info" :style="{ 'stroke': stroke, 'stroke-width': strokeWidth }" class="svg-fill-gray" d="M296 22.8L332 2L368 22.8V64.3L332 85L296 64.3V22.8Z"/>
</template>
<script>
export default {
  name: 'PathAbout',
  props: ['active'],
  data () {
    return {
      stroke: '#1f2933',
      strokeWidth: '2px'
    }
  },
  watch: {
    active (newActive, oldActive) {
      this.stroke = newActive === 'about' ? '#e12d39' : '#1f2933'
      this.strokeWidth = newActive === 'about' ? '4px' : '2px'
    }
  }

}
</script>
