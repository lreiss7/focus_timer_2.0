import state from './state.js'
import * as events from './events.js'
import * as timer from './timer.js'
import { treeButton, rainButton, storeButton, fireButton } from './elements.js'
import * as sounds from './sounds.js'

let currentSound = null

function handleButtonClick(event) {
  const clickedButton = event.target
  const theme = clickedButton.dataset.theme

  const isCurrentSoundPlaying = currentSound === theme

  if (!isCurrentSoundPlaying && currentSound) {
    sounds.stopSound(currentSound)
  }

  if (!isCurrentSoundPlaying) {
    sounds.playTheme(theme)
    currentSound = theme
  } else {
    sounds.stopSound(theme)
    currentSound = null
  }

  const allButtons = [treeButton, rainButton, storeButton, fireButton]
  allButtons.forEach(button => {
    if (button !== clickedButton) {
      button.checked = false
    }
  });
}

export function start(minutes, seconds, soundTheme = null) {
  state.minutes = minutes
  state.seconds = seconds

  const soundCheckboxes = document.querySelectorAll('[theme]')
  soundCheckboxes.forEach(checkbox => {
    checkbox.checked = checkbox.dataset.theme === soundTheme
  });

  timer.updateDisplay()
  events.registerControls()

  if (soundTheme) {
    sounds.playTheme(soundTheme)
    currentSound = soundTheme
  }
}

treeButton.addEventListener('click', handleButtonClick)
rainButton.addEventListener('click', handleButtonClick)
storeButton.addEventListener('click', handleButtonClick)
fireButton.addEventListener('click', handleButtonClick)