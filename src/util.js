function setLocalStorageTimers(timers) {
  localStorage.setItem('timer', JSON.stringify(timers))
}

function getLocalStorageTimers() {
  return JSON.parse(localStorage.getItem('timer'))
}

function setLocalStorageLang(lang) {
  localStorage.setItem('lang', JSON.stringify(lang))
}
function getLocalStorageLang() {
  return JSON.parse(localStorage.getItem('lang'))
}
function setLocalStorageTheme(theme) {
  localStorage.setItem('theme', JSON.stringify(theme))
}
function getLocalStorageTheme() {
  return JSON.parse(localStorage.getItem('theme'))
}

module.exports = {
  setLocalStorageTimers,
  getLocalStorageTimers,
  setLocalStorageLang,
  getLocalStorageLang,
  setLocalStorageTheme,
  getLocalStorageTheme,
}
