<template>
  <section class="about">
    <h4>{{ content.header }}</h4>
    <p v-html="content.description"></p>
    <p v-html="content.workDescription"></p>
    <div class="photo-jobs">
      <div
        v-for="item in content.workPhotos"
        :key="item"
        :style="{ backgroundImage: 'url(' + item + ')' }"
      ></div>
    </div>
    <h5>{{ content.aboutSuppliers }}</h5>
    <div class="suppliers">
      <div>
        <a v-for="item in content.suppliers" :href="item.href" :key="item">
          <img :src="item.src" :alt="item.alt" />
        </a>
      </div>
    </div>
    <h5>{{ content.aboutClients }}</h5>
    <div class="clients">
      <a v-for="item in content.clients" :href="item.href" :key="item">
        <img :src="item.src" :alt="item.alt" />
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  props: ["content"],
};
</script>

<style>
.about {
  padding: 0;
}
.about h4,
.about h5,
.about p {
  margin-left: 0.75rem;
  margin-right: 0.75rem;
}
.photo-jobs {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}
.photo-jobs div {
  width: 90%;
  height: 10vh;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.3s ease;
}
.photo-jobs div:hover {
  height: 115vw;
}
.suppliers {
  width: 100%;
  position: relative;
  height: 12vh;
  left: 0;
  overflow: scroll;
}
.suppliers div {
  display: flex;
  align-items: center;
  position: absolute;
}
.suppliers a {
  margin-left: 0.2rem;
  margin-right: 0.2rem;
}
.clients {
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
}
.clients img {
  max-width: 5rem;
  padding: 0.5rem;
}
</style>
