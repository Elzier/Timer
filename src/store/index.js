import { createStore } from 'vuex'
import { setTimers, getTimers } from '../util'

export default createStore({
  state: {
    timers: [],
  },

  mutations: {
    deleteTimer(state, id) {
      state.timers = state.timers.filter((timer) => timer.id !== id)
      setTimers(state.timers)
    },
    addTimer(state, payload) {
      state.timers.push(payload)
      console.log(state.timers)
      setTimers(state.timers)
    },
    tickTimer(state) {
      state.timers.forEach((timer) => {
        timer.seconds--
      })
      setTimers(state.timers)
    },
    readTimers(state) {
      state.timers = getTimers()
    },
  },

  actions: {
    countDown: ({ commit }, data) => {
      const currentTime = new Date().getTime()
      const timerExpiration = new Date(data).getTime()
      const remainedTime = Math.floor((timerExpiration - currentTime) / 1000)

      commit('addTimer', {
        id: Date.now(),
        seconds: remainedTime,
      })
    },
    deleteTimer: ({ commit }, id) => {
      commit('deleteTimer', id)
    },
    tickTimer: ({ commit }) => {
      commit('tickTimer')
    },
  },
  getters: {
    timers: ({ timers }) => {
      return timers.map((timer) => {
        let s = timer.seconds
        let m = Math.floor(s / 60)
        let h = Math.floor(m / 60)
        let d = Math.floor(h / 24)

        h %= 24
        m %= 60
        s %= 60

        return {
          id: timer.id,
          d,
          h,
          m,
          s,
        }
      })
    },
  },
  modules: {},
})
