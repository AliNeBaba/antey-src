<template>
  <section class="video-monitoring">
    <h4>{{ content.header }}</h4>
    <p>{{ content.description }}</p>
    <div v-for="item in content.cameras" :key="item">
      <h5>{{ item.header }}</h5>
      <iframe :src="item.src" frameborder="0" class="camera" allowfullscreen>
      </iframe>
    </div>
  </section>
</template>

<script>
export default {
  name: "VideoMonitoring",
  props: ["content"],
};
</script>

<style>
.video-monitoring div {
  margin-bottom: 1.2rem;
}
</style>
