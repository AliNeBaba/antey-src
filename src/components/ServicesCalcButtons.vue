<template>
  <div class="service__calc__buttons">
    <button
      class="service__calc__button"
      type="button"
      @click="runCurrentEmit('add')"
    >
      Добавить
    </button>
    <span>{{ counter }}</span>
    <button
      class="service__calc__button"
      :disabled="!counter"
      type="button"
      @click="runCurrentEmit('remove')"
    >
      Убрать
    </button>
    <span class="total">
      На сумму: <i>{{ total }}</i>
    </span>
  </div>
</template>

<script>
export default {
  name: "CalcButtons",
  data() {
    return {
      counter: 0,
      total: 0,
    };
  },
  props: ["price"],
  emits: ["changeCalc"],
  methods: {
    runCurrentEmit(action) {
      this.$emit("changeCalc", action);
      if (action === "add") {
        this.counter += 1;
        this.total += this.price;
      } else {
        this.counter -= 1;
        this.total -= this.price;
      }
    },
  },
};
</script>

<style>
.service__calc__buttons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.service__calc__buttons .service__calc__button {
  width: 6rem;
}
.service__calc__buttons .service__calc__button::before {
  left: 6%;
  width: 88%;
}
.service__calc__buttons .total {
  flex-basis: 10rem;
  margin-top: 1rem;
}
</style>
