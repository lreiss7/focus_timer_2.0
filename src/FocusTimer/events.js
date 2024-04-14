import { controls } from './elements.js'
import * as actions from './actions.js'

export function registerControls () {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != "function") {
      return
    }

    actions[action]()
  })
}

export function registerSoundsControls () {
  controls.addEventListener('change', (event) => {
    const clickedElement = event.target

    if (clickedElement.tagName !== 'INPUT' || !clickedElement.type === 'checkbox'){
      return
    }

    const theme = clickedElement.dataset.theme
    const isChecked = clickedElement.checked

    if (isChecked) {
      actions.playTheme(theme)
    } else {
      actions.stopSound(theme)
    }
  })
}