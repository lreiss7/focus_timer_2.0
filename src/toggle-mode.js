let lightMode = true
const buttonToggle = document.getElementById('toggle-mode')

function toggleMode() {
  lightMode = !lightMode
  document.documentElement.classList.toggle('dark', !lightMode)

  const modeText = lightMode ? 'Dark mode ativado!' :  'Light mode ativado'
  buttonToggle.querySelector('span').textContent = modeText
}

buttonToggle.addEventListener('click', toggleMode)

const savedMode = localStorage.getItem('lightMode')
if (savedMode !== null) {
  lightMode = savedMode === 'true'
  toggleMode()
}

function saveMode() {
  localStorage.setItem('lightMode', lightMode)
}

window.addEventListener('beforeunload', saveMode)



// buttonToggle.addEventListener('click', (event) => {
//   document.documentElement.classList.toggle('dark')

//   const mode = lightMode ? 'dark' : 'light'

//   event.currentTarget
//     .querySelector('span').textContent = `${mode} mode ativado!`

//   lightMode = !lightMode
// })
