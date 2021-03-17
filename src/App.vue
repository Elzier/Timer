<template>
  <div class="container" :class="bgclasses">
    <BaseError />
    <Header />
    <hr />
    <transition appear name="timer">
      <Timer />
    </transition>
  </div>
</template>

<script>
import Timer from './components/Timer'
import Header from './components/Header'
import BaseError from './components/ui/DateError'

export default {
  name: 'App',
  components: {
    Timer,
    Header,
    BaseError,
  },
  mounted() {
    this.$store.commit('readLoacalStorage')
    setInterval(() => {
      this.$store.dispatch('tickTimer')
    }, 1000)
  },
  computed: {
    getTheme() {
      return this.$store.getters.getTheme
    },
    bgclasses() {
      return {
        bgwhite: !this.getTheme,
        bgred: this.getTheme === 'red',
        bggreen: this.getTheme === 'green',
        bgblue: this.getTheme === 'blue',
      }
    },
  },
}
</script>

<style lang="scss">
* {
  font-family: Roboto;
}

body {
  padding: 0;
  margin: 0;
}
.container {
  min-height: 100vh;
}
.bgred {
  background-color: red;
  color: white;
}
.bggreen {
  background-color: chartreuse;
}
.bgblue {
  background-color: cornflowerblue;
}

#app {
  margin: 0;
  padding: 0;
}

.timer-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.timer-enter-active {
  transition: all 0.3s ease-in;
}

.timer-enter-to,
.timer-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.timer-leave-active {
  transition: all 0.3s ease-out;
}

.timer-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
