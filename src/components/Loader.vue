<template>
  <div id="overlay-circular">
    <div class="loader-circular"></div>
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style>
:root {
  --color-animation1: var(--red);
  --color-animation2: var(--white);
  --color-animation3: var(--red);
  --border-size: 3px solid transparent;
}
:root {
  --time-animation1: spin-circular 1.5s linear infinite;
  --time-animation2: spin-circular 2s linear infinite;
  --time-animation3: spin-circular 3s linear infinite;
}
#overlay-circular {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: var(--black);
  opacity: 0.8;
}
.loader-circular {
  display: block;
  position: relative;
  left: 50%;
  top: 50%;
  width: 150px;
  height: 150px;
  margin: -75px 0 0 -75px;
  border-radius: 50%;
  border: var(--border-size);
  border-top-color: var(--color-animation1);
  -webkit-animation: var(--time-animation2);
  animation: var(--time-animation2);
}
.loader-circular:before {
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border-radius: 50%;
  border: var(--border-size);
  border-top-color: var(--color-animation2);
  -webkit-animation: var(--time-animation3);
  animation: var(--time-animation3);
}
.loader-circular:after {
  content: "";
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  border-radius: 50%;
  border: var(--border-size);
  border-top-color: var(--color-animation3);
  -webkit-animation: var(--time-animation1);
  animation: var(--time-animation1);
}
@-webkit-keyframes spin-circular {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spin-circular {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
