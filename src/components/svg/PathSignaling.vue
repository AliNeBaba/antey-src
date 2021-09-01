<template>
  <path class="svg-fill-red" d="M136.3 102.5C135.2 104.4 134.1 106.2 134.1 109.1C134.1 110.6 135.2 112.9 136.4 115.7C139.9 123.7 145.1 135.5 132.8 142.3C161.6 138.6 153.7 115.1 150.6 105.9C150.5 105.6 150.4 105.3 150.3 105.1C150.3 118.7 146.8 118.9 145.3 119C145 119 144.9 119 144.7 119.1C139.1 119.1 140.5 114.7 142.1 109.3C143.1 106.3 144.1 103 144 100C143.7 93.6 140.2 90.6 136.4 89C139.7 96.4 138 99.5 136.3 102.5ZM122.5 89.91L110.9 102.3V94.7H104.464V108.2L94 118.8H104.5V142.2H121.4C112.9 135.5 116.4 129.9 119.5 124.8C121.6 121.5 123.5 118.4 121.7 115.5C127.6 116.8 126.4 120.9 125.3 124.5C124.4 127.9 123.5 130.9 128.1 131.1C133.8 131.1 132.3 127.3 130.4 122.2C128 116 125 108 133.1 102.9V101L122.5 89.9Z"/>
  <path id="fire" :style="{ 'stroke': stroke, 'stroke-width': strokeWidth }" class="svg-fill-gray" d="M88 94.8L124 74L160 94.8V136.3L124 157L88 136.3V94.8Z"/>
</template>
<script>
export default {
  name: 'PathSignaling',
  props: ['active'],
  data () {
    return {
      stroke: '#1f2933',
      strokeWidth: '2px'
    }
  },
  watch: {
    active (newActive, oldActive) {
      this.stroke = newActive === 'signaling' ? '#e12d39' : '#1f2933'
      this.strokeWidth = newActive === 'signaling' ? '4px' : '2px'
    }
  }

}
</script>
