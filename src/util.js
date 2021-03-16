function setTimers(timers) {
  localStorage.setItem('timer', JSON.stringify(timers))
}

function getTimers() {
  console.log('getting')
  return JSON.parse(localStorage.getItem('timer'))
}

module.exports = {
  setTimers,
  getTimers,
}
