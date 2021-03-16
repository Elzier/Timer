<template>
  <Header />
  <hr />
  <Timer />
</template>

<script>
import Timer from './components/Timer'
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Timer,
    Header,
  },
  mounted() {
    this.$store.commit('readTimers')
    setInterval(() => {
      this.$store.dispatch('tickTimer')
    }, 1000)
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
#app {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
}
</style>
