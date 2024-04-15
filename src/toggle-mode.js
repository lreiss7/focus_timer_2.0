let lightMode = true
const buttonToggle = document.getElementById('toggle-mode')

function toggleMode() {
  lightMode = !lightMode
  document.documentElement.classList.toggle('dark', !lightMode)

  const modeText = lightMode ? 'Dark mode ativado!' : 'Light mode ativado!'
  buttonToggle.querySelector('span').textContent = modeText
  saveMode()
}

buttonToggle.addEventListener('click', toggleMode)

const savedMode = localStorage.getItem('lightMode')
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  lightMode = false
} else if (savedMode !== null) {
  lightMode = savedMode === 'true'
}

if (!savedMode) {
  toggleMode()
}

function saveMode() {
  localStorage.setItem('lightMode', lightMode)
}

window.addEventListener('beforeunload', saveMode)