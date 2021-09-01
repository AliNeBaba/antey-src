<template>
  <path class="svg-fill-red" d="M193.8 133.3V115.3L237 102.1L235.7 98L193.8 110.8V108.6H177V133.3H193.8ZM187.9 116.4C187.9 118 186.6 119.3 185 119.3C183.4 119.3 182 118 182 116.4C182 114.8 183.4 113.5 185 113.5C186.6 113.5 187.9 114.8 187.9 116.4ZM200.9 109.1L202.9 108.5L201.8 112.6L199.6 113.2L200.9 109.1ZM214 105L212 105.7L210.8 109.8L212.9 109.1L214 105ZM221.7 102.7L223.7 102L222.6 106L220.4 106.7L221.7 102.7ZM233.6 99L231.6 99.6L230.3 103.7L232.5 103L233.6 99Z"/>
  <path id="barrier" :style="{ 'stroke': stroke, 'stroke-width': strokeWidth }" class="svg-fill-gray" d="M171 94.8L207 74L243 94.8V136.3L207 157L171 136.3V94.8Z"/>
</template>
<script>
export default {
  name: 'PathBarrier',
  props: ['active'],
  data () {
    return {
      stroke: '#1f2933',
      strokeWidth: '2px'
    }
  },
  watch: {
    active (newActive, oldActive) {
      this.stroke = newActive === 'barrier' ? '#e12d39' : '#1f2933'
      this.strokeWidth = newActive === 'barrier' ? '4px' : '2px'
    }
  }

}
</script>
