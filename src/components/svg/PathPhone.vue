<template>
  <path class="svg-fill-red" d="M152.2 18.4L158.5 25.9C159.3 26.9 161 26.5 161.7 25.4C168 16.8 193 46.5 183.4 51.3C182.3 51.8 181.5 53.4 182.3 54.3L188.7 61.9C189 62.4 189.8 62.6 190.3 62.3C207 54.4 162.7 1.6 152 16.7C151.7 17.2 151.8 17.9 152.2 18.4ZM142 66.4H145.4V40.8H142V66.4ZM153.1 66.4V56.4H159.2C162 56.4 164.3 55.7 165.8 54.4C167.4 53 168.2 51.1 168.2 48.6C168.2 46.3 167.4 44.4 165.8 43C164.2 41.5 162 40.8 159.2 40.8H149.8V66.4H153.1ZM159.2 53.6H153.1V43.6H159.4C161 43.6 162.4 44.1 163.4 45C164.3 45.9 164.8 47.1 164.8 48.7C164.8 50.3 164.3 51.5 163.4 52.4C162.4 53.2 161 53.6 159.2 53.6Z"/>
  <path id="phone" :style="{ 'stroke': stroke, 'stroke-width': strokeWidth }" class="svg-fill-gray" d="M130 22.8L166 2L202 22.8V64.3L166 85L130 64.3V22.8Z"/>
</template>
<script>
export default {
  name: 'PathPhone',
  props: ['active'],
  data () {
    return {
      stroke: '#1f2933',
      strokeWidth: '2px'
    }
  },
  watch: {
    active (newActive, oldActive) {
      this.stroke = newActive === 'phone' ? '#e12d39' : '#1f2933'
      this.strokeWidth = newActive === 'phone' ? '4px' : '2px'
    }
  }
}
</script>
