

export function playTheme(theme) {
  if(!sounds[theme]) {
    console.error(`Sound not fond: ${theme}`)
    return
  }
  
  const selectAudio = sounds[theme].audio
  selectAudio.currentTime = 0
  
  selectAudio.play()
}

export function stopSound(theme) {
  if (sounds[theme]) {
    sounds[theme].audio.pause()
    sounds[theme].audio.currentTime = 0
  }
}

export const sounds = {
  tree: {
    url: './assets/sounds/tree.mp3',
    audio: new Audio('./assets/sounds/tree.mp3')
  },

  rain: {
    url: './assets/sounds/rain.mp3',
    audio: new Audio('./assets/sounds/rain.mp3')
  },

  store: {
    url: './assets/sounds/store.mp3',
    audio: new Audio('./assets/sounds/store.mp3')
  },

  fire: {
    url: './assets/sounds/fire.mp3',
    audio: new Audio('./assets/sounds/fire.mp3')
  },
}