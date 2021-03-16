<template>
  <li class="item">
    <div class="item__days">{{ days }}</div>
    <div class="item__hours">{{ hours }}</div>
    <div class="item__minutes">{{ minutes }}</div>
    <div class="item__seconds">{{ seconds }}</div>
  </li>
</template>

<script>
export default {
  props: {
    days: {
      type: Number,
      default: 0
    },
    hours: {
      type: Number,
      default: 0
    },
    minutes: {
      type: Number,
      default: 0
    },
    seconds: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss">
  .item {
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    &__days {
    }
  }
</style>