import { createStore } from 'vuex'

export default createStore({
  state: {
    timers: [
      {
        id: 1576996323453,
        d: 15,
        h: 20,
        m: 25,
        s: 55,
      },
    ],
  },

  mutations: {
    setTimeLeft(state, timeLeft) {
      state.timers.push(timeLeft)
    },
    deleteTimer(state, id) {
      state.timers = state.timers.filter((timer) => timer.id !== id)
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

      const timeLeft = {
        id: Date.now(),
        d,
        h,
        m,
        s,
      }

      commit('setTimeLeft', timeLeft)
    },
    deleteTimer: ({ commit }, id) => {
      commit('deleteTimer', id)
    },
  },
  getters: {
    timers: ({ timers }) => timers,
  },
  modules: {},
})
