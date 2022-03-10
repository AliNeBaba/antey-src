<template>
  <footer>
    <div class="contacts">
      <div class="social">
        <a href="https://vk.com/antey_yeisk"><svg-vk /></a>
        <a href="https://www.instagram.com/antey_yeisk/"><svg-inst /></a>
      </div>
      <p>
        Ул. Энгельса 158/3<br />Tорговый дом «Форум»<br />3-й этаж офис 34<br />Телефоны:<br />
      </p>
      <a href="tel:8 (928) 273-07-00">8&nbsp;(928)&nbsp;273-07-00</a>
      <a href="tel:8 (86132) 3-40-04">8&nbsp;(86132)&nbsp;3-40-04</a>
      <a href="mailto: osb-eisk@mail.ru">Email: osb-eisk@mail.ru</a>
    </div>
    <iframe
      src="https://yandex.ru/map-widget/v1/?um=constructor%3A281cf9d6a92d3f1719a0ccdbbac344293d94c161a81bbd254d832189896d2afa&amp;source=constructor"
      width="100%"
      height="300"
      frameborder="0"
      >
    </iframe>
    <p>2021 Made by </p>
    <a href="http://www.alistudio.ru/">alistudio</a>
  </footer>
</template>

<script>
import VK from "./SVG/FooterVK.vue";
import Inst from "./SVG/FooterInst.vue";

export default {
  name: "Footer",
  components: {
    "svg-vk": VK,
    "svg-inst": Inst,
  },
};
</script>

<style>
footer {
  background-color: var(--black);
  display: flex;
  flex-flow: column nowrap;
  padding: 0.75rem;
  border-top: solid 0.1rem var(--red);
}
.contacts {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
}
footer a {
  color: var(--lightgrey);
}
footer a:hover {
  color: var(--red);
  filter: drop-shadow(0 0 0.5rem var(--red));
}
.social {
  display: flex;
  justify-content: center;
}
.social a {
  width: 30px;
}
.social svg path {
  fill: var(--red);
}
</style>
