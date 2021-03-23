import { createStore } from 'vuex'
import {
  setLocalStorageTimers,
  getLocalStorageTimers,
  setLocalStorageLang,
  getLocalStorageLang,
  setLocalStorageTheme,
  getLocalStorageTheme,
} from '../util'

export default createStore({
  state: {
    timers: [],
    lang: 'pl',
    theme: '',
    wrongDateError: false,
  },

  mutations: {
    deleteTimer(state, id) {
      state.timers = state.timers.filter((timer) => timer.id !== id)
      setLocalStorageTimers(state.timers)
    },
    addTimer(state, payload) {
      state.timers.push(payload)
      setLocalStorageTimers(state.timers)
    },
    tickTimer(state) {
      state.timers.forEach((timer) => {
        timer.seconds--
      })
      setLocalStorageTimers(state.timers)
    },
    readLoacalStorage(state) {
      state.timers = getLocalStorageTimers() || []
      state.lang = getLocalStorageLang() || 'pl'
      state.theme = getLocalStorageTheme() || ''
    },
    changeLanguage(state, language) {
      state.lang = language
      setLocalStorageLang(language)
    },
    changeTheme(state, theme) {
      state.theme = theme
      setLocalStorageTheme(theme)
    },
    setError(state) {
      state.wrongDateError = !state.wrongDateError
      console.log(state.wrongDateError)
    },
  },

  actions: {
    countDown: ({ commit }, data) => {
      const currentTime = new Date().getTime()
      const timerExpiration = new Date(data).getTime()
      const remainedTime = Math.floor((timerExpiration - currentTime) / 1000)
      if (remainedTime <= 0) {
        commit('setError')
        return
      }

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
    getLang: ({ lang }) => lang,
    getTheme: ({ theme }) => theme,
    getError: ({ wrongDateError }) => wrongDateError,
  },
  modules: {},
})
