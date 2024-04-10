import state from './state.js'
import * as timer from './timer.js'
import { plusButton, minusButton } from './elements.js'

export function toggleRunning() {
  state.isRunning = true
  document.documentElement.classList.toggle('running') 
  
  plusButton.disabled = state.isRunning
  minusButton.disabled = state.isRunning
  
  timer.countdown()
}

export function pause() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  document.documentElement.classList.add('paused')
  
  plusButton.disabled = !state.isRunning
  minusButton.disabled = !state.isRunning

}

export function reset() {
  state.isRunning = false

  document.documentElement.classList.remove('running')
  document.documentElement.classList.remove('paused')

  plusButton.disabled = false
  minusButton.disabled = state.isRunning

  timer.updateDisplay()
}

export function plus() {
  if (state.isRunning) {
    return
  } 

  state.minutes = Math.min(Number(state.minutes) + 5, 60)

  timer.updateDisplay()
 }
 
export function minus() {
  if (state.isRunning) {
    return
  }

  state.minutes = Math.max(Number(state.minutes) - 1, 1)

  timer.updateDisplay()
}
