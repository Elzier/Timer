<template>
  <li class="timer">
    <div class="timer__container">
      <div class="timer__days item">
        <div class="item__number">{{ days }}</div>
      </div>
      <div class="timer__hours item">
        <div class="item__number">{{ hours }}</div>
      </div>
      <div class="timer__minutes item">
        <div class="item__number">{{ minutes }}</div>
      </div>
      <div class="timer__seconds item">
        <div class="item__number">{{ seconds }}</div>
      </div>

      <div class="timer__close">
        <span>×</span>
      </div>
    </div>
    <div class="labels">
      <div class="labels__item">DNI</div>
      <div class="labels__item">GODZ</div>
      <div class="labels__item">MIN</div>
      <div class="labels__item">SEK</div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    days: {
      type: Number,
      default: 0,
    },
    hours: {
      type: Number,
      default: 0,
    },
    minutes: {
      type: Number,
      default: 0,
    },
    seconds: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="scss">
.timer {
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: #5a5a5a dashed;
  height: 100px;
  &__container {
    position: relative;
    margin-top: 8px;
    width: 250px;
    height: 58px;
    display: flex;
    justify-content: space-between;
  }
  &__close {
    border: 1px black solid;
    background-color: red;
    position: absolute;
    right: -18px;
    width: 13px;
    height: 13px;
    span {
      color: white;
      position: absolute;
      left: 2px;
      top: -3px;
    }
  }
}
.labels {
  display: flex;
  width: 220px;
  justify-content: space-between;
  &__item {
    display: flex;
  }
}
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  border: black solid;
  width: 55px;
  height: 55px;
  &__number {
    font-size: 30px;
  }
}
</style>
