import { createStore } from 'vuex'

export default createStore({
  state: {
    timers: [
      {
        d: 15,
        h: 20,
        m: 25,
        s: 55,
      },
    ],
  },
  mutations: {
    setTimeLeft(state, timeLeft) {
      console.log(timeLeft)
      state.timers.push(timeLeft)
    },
  },
  actions: {
    countDown: ({ commit }, data) => {
      const currentTime = new Date().getTime()
      const timerExpiration = new Date(data).getTime()
      const remainedTime = timerExpiration - currentTime
      let s = Math.floor(remainedTime / 1000)
      let m = Math.floor(s / 60)
      let h = Math.floor(m / 60)
      let d = Math.floor(h / 24)

      h %= 24
      m %= 60
      s %= 60

      const timeLeft = { d, h, m, s }

      commit('setTimeLeft', timeLeft)
    },
  },
  getters: {
    timers: ({ timers }) => timers,
  },
  modules: {},
})
