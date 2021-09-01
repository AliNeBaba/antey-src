<template>
  <header @scroll="bigActive = false" class="main-header container-fluid">
    <div>
       <router-link class="logo" to="/">
          <img src="@/assets/logo-small.png" alt="Логотип ООО АНТЕЙ" title="Главная страница. Вы здесь." />
        </router-link>
        <a href="tel:8 (86132) 3-40-04" class="tel white-text-shadow">8&nbsp;(86132)&nbsp;3-40-04</a>
    </div>

    <nav class="menu">
      <svg id="big-menu" width="373" height="167" viewBox="0 0 373 167" fill="none" xmlns="http://www.w3.org/2000/svg">
        <a href="#" @click="setActive('video')"><path-video :active="isActive" /></a>
        <a href="#" @click="setActive('barrier')"><path-barrier :active="isActive" /></a>
        <a href="#" @click="setActive('home')"><path-home :active="isActive" /></a>
        <a href="#" @click="setActive('phone')"><path-phone :active="isActive" /></a>
        <a href="#" @click="setActive('tv')"><path-tv :active="isActive" /></a>
        <a href="#" @click="setActive('split')"><path-split :active="isActive" /></a>
        <a href="#" @click="setActive('signaling')"><path-signaling :active="isActive" /></a>
        <a href="#" @click="setActive('about')"><path-about :active="isActive" /></a>
      </svg>

      <input type="checkbox" id="menu-show" />
      <label id="small-menu" for="menu-show">
        <path-small-menu />
      </label>
      <div id="big-menu-to-show" v-show="mediaToBigMenu" class="btn-group" role="group" aria-label="Basic outlined example">
        <router-link :to="linkAboutService" class="btn btn-outline-primary">
          <template v-if="isActive !== 'about'">Об услуге</template>
          <template v-else>О компании</template></router-link>
        <router-link :to="linkToCalc" class="btn btn-outline-primary">
          <i v-if="isActive !== 'about'">Калькулятор</i>
          <i v-else>Камеры онлайн</i></router-link>
        <router-link :to="linkToRead" class="btn btn-outline-primary">
          <i v-if="isActive !== 'about'">Статьи по теме</i>
          <i v-else>Фотогалерея</i></router-link>
      </div>
      <div class="small-menu-to-show btn-group-vertical">
          <router-link class="btn btn-secondary" to="/service/video">Видеонаблюдение</router-link>
          <router-link class="btn btn-secondary" to="/service/signaling">Сигнализация</router-link>
          <router-link class="btn btn-secondary" to="/service/tv">Телевидение</router-link>
          <router-link class="btn btn-secondary" to="/service/phone">Телефония</router-link>
          <router-link class="btn btn-secondary" to="/service/home">Умный Дом</router-link>
          <router-link class="btn btn-secondary" to="/service/barrier">Системы доступа</router-link>
          <router-link class="btn btn-secondary" to="/service/split">Сплит-системы</router-link>
          <router-link class="btn btn-secondary" to="/about">Калькулятор</router-link>
          <router-link class="btn btn-secondary" to="/about">О нас</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import PathVideo from '@/components/svg/PathVideo.vue'
import PathTv from '@/components/svg/PathTv.vue'
import PathSplit from '@/components/svg/PathSplit.vue'
import PathSignaling from '@/components/svg/PathSignaling.vue'
import PathPhone from '@/components/svg/PathPhone.vue'
import PathHome from '@/components/svg/PathHome.vue'
import PathBarrier from '@/components/svg/PathBarrier.vue'
import PathAbout from '@/components/svg/PathAbout.vue'
import PathSmallMenu from '@/components/svg/PathSmallMenu.vue'
export default {
  name: 'HeaderSite',
  components: {
    'path-video': PathVideo,
    'path-tv': PathTv,
    'path-split': PathSplit,
    'path-signaling': PathSignaling,
    'path-phone': PathPhone,
    'path-home': PathHome,
    'path-barrier': PathBarrier,
    'path-small-menu': PathSmallMenu,
    'path-about': PathAbout
  },
  data () {
    return {
      isActive: '',
      timerId: null
    }
  },
  computed: {
    mediaToBigMenu () {
      if (document.documentElement.clientWidth > 992 && this.isActive) {
        return true
      } else { return false }
    },
    linkAboutService () {
      return this.isActive !== 'about' ? `/${this.isActive}#services` : '/about'
    },
    linkToCalc () {
      return this.isActive !== 'about' ? `/service/${this.isActive}` : '/watch_online'
    },
    linkToRead () {
      return this.isActive !== 'about' ? `/articles/${this.isActive}` : '/photo_gallery'
    }
  },
  methods: {
    setActive (target) {
      this.isActive = ''
      this.isActive = target
      clearTimeout(this.timerId)
      this.timerId = setTimeout(this.clearActive, 8000)
    },
    clearActive () {
      this.isActive = ''
    }
  }
}
</script>
