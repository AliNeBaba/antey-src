<template>
  <path class="svg-fill-red" d="M55.6 24.8C55.6 22.7 57.3 21 59.4 21C61.5 21 63.2 22.7 63.2 24.8V30.5C63.2 30.6 63.2 30.7 63.2 30.7L113 42.1V53.2L63 31.7C63 31.8 63 31.9 62.9 32L112.6 60.7L102.6 66.4L62.5 32.8C62.5 32.8 62.4 32.9 62.4 32.9L96.9 69.8L87.6 75.4L61.6 33.7C61.5 33.8 61.3 33.8 61.2 33.9L80.8 77L69 69.7L60.2 34.3C60 34.3 60 34.3 59.9 34.3L63.4 66.8L53 60.7L58.6 34.3C56.9 33.9 55.6 32.4 55.6 30.5V24.8ZM59.4 31.9C60.2 31.9 60.8 31.3 60.8 30.5C60.8 29.8 60.2 29.2 59.4 29.2C58.7 29.2 58 29.8 58 30.6C58 31.3 58.7 31.9 59.4 31.9Z"/>
  <path id="home" :style="{ 'stroke': stroke, 'stroke-width': strokeWidth }" class="svg-fill-gray" d="M47 22.8L83 2L119 22.8V64.3L83 85L47 64.3V22.8Z"/>
</template>
<script>
export default {
  name: 'PathHome',
  props: ['active'],
  data () {
    return {
      stroke: '#1f2933',
      strokeWidth: '2px'
    }
  },
  watch: {
    active (newActive, oldActive) {
      this.stroke = newActive === 'home' ? '#e12d39' : '#1f2933'
      this.strokeWidth = newActive === 'home' ? '4px' : '2px'
    }
  }

}
</script>
