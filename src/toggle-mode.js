let lightMode = true
const buttonToggle = document.getElementById('toggle-mode')

function updateUI() {
  document.documentElement.classList.toggle('dark', !lightMode)

  const modeText = lightMode ? 'Light mode ativado!' : 'Dark mode ativado!'
  buttonToggle.querySelector('span').textContent = modeText
}

function saveMode() {
  localStorage.setItem('lightMode', lightMode.toString())
}

function toggleMode() {
  lightMode = !lightMode
  updateUI()
  saveMode()
}

buttonToggle.addEventListener('click', toggleMode)

function ckeckSaveMode() {
  const savedMode = localStorage.getItem('lightMode')

  if (savedMode !== null) {
    lightMode = savedMode === 'true'
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    lightMode = false
  } else {
    lightMode = true
  }
  updateUI()
}

ckeckSaveMode()

if (window.matchMedia) {
  const colorSchemeListener = (e) => {
    lightMode = !e.matches
    updateUI()
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', colorSchemeListener)
}

ckeckSaveMode()