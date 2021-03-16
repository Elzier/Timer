<template>
  <section class="list">
    <div class="form">
      <div @click="countDown(timerData)" class="form__add"></div>
      <div class="form__input">
        <label class="form__label" for="timer">Nowy licznik:</label>
        <input
          v-model="timerData"
          id="timer"
          type="datetime-local"
          name="deadline"
        />
      </div>
    </div>
    <ul class="timers">
      <TimersItem
        v-for="({ d, h, m, s }, key) in timers"
        :key="key"
        :days="d"
        :hours="h"
        :minutes="m"
        :seconds="s"
      />
    </ul>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TimersItem from './TimersItem'

export default {
  name: 'Timer',
  components: {
    TimersItem,
  },
  data: () => ({
    timerData: '',
  }),
  methods: {
    ...mapActions(['countDown']),
  },
  computed: {
    ...mapGetters(['timers']),
  },
  mounted() {
    let now = new Date()
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset())
    this.timerData = now.toISOString().slice(0, 16)
  },
}
</script>

<style lang="scss">
.list {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.form {
  width: 240px;
  margin-top: 35px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  &__add {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    background: #c4c4c4;
    &::before {
      content: '';
      display: block;
      width: 1px;
      height: 15px;
      background-color: black;
    }
    &::after {
      content: '';
      display: block;
      width: 15px;
      height: 1px;
      background-color: black;
      position: absolute;
    }
  }
  &__label {
    display: block;
    font-size: 12px;
  }
}
.timers {
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
