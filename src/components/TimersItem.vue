<template>
  <li class="timer">
    <div class="timer__container bg-theme">
      <div class="timer__unit">
        <div class="item">
          <div class="item__number">{{ days }}</div>
        </div>
        <div class="labels__item">
          {{ t('days', {}, { locale: getLang }) }}
        </div>
      </div>

      <div class="timer__unit">
        <div class="timer__hours item">
          <div class="item__number">{{ hours }}</div>
        </div>
        <div class="labels__item">
          {{ t('hours', {}, { locale: getLang }) }}
        </div>
      </div>
      <div class="timer__unit">
        <div class="timer__minutes item">
          <div class="item__number">{{ minutes }}</div>
        </div>
        <div class="labels__item">
          {{ t('minutes', {}, { locale: getLang }) }}
        </div>
      </div>
      <div class="timer__unit">
        <div class="timer__seconds item">
          <div class="item__number">{{ seconds }}</div>
        </div>
        <div class="labels__item">
          {{ t('seconds', {}, { locale: getLang }) }}
        </div>
      </div>

      <div @click="deleteTimer(id)" class="timer__close">
        <span>×</span>
      </div>
    </div>

    <div class="labels"></div>
  </li>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import { useI18n } from 'vue-i18n'

export default {
  setup: () => {
    const { t, locale } = useI18n()
    return { t, locale }
  },
  props: {
    id: {
      type: Number,
      default: 0,
    },
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
  methods: {
    ...mapActions(['deleteTimer']),
  },
  computed: {
    ...mapGetters(['getLang']),
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
    width: 250px;
    display: flex;
    justify-content: space-between;
  }
  &__close {
    cursor: pointer;
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
  &__unit {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
// .labels {
//   display: flex;
//   width: 220px;
//   justify-content: space-between;
//   &__item {
//     display: flex;
//   }
// }
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

.item-enter-active,
.item-leave-active {
  transition: opacity 0.9s ease;
}

.item-enter-from,
.item-leave-to {
  opacity: 0;
}
</style>
