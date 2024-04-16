let lightMode = true
const buttonToggle = document.getElementById('toggle-mode')

function upateUI() {
  document.documentElement.classList.toggle('dark', !lightMode)

  const modeText = lightMode ? 'Light mode ativado!' : 'Dark mode ativado!'
  buttonToggle.querySelector('span').textContent = modeText
}

function saveMode() {
  localStorage.setItem('lightMode', lightMode.toString())
}

function toggleMode() {
  lightMode = !lightMode
  upateUI()
  saveMode()
}

buttonToggle.addEventListener('click', toggleMode)

function ckeckSaveMode() {
  const savedMode = localStorage === 'true'

  if (savedMode !== null) {
    lightMode = savedMode === 'true'
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    lightMode = false
  } else {
    lightMode = true
  }
}

ckeckSaveMode()
upateUI()
