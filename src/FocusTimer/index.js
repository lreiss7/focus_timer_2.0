import state from './state.js'
import * as events from './events.js'
import * as timer from './timer.js'
import { treeButton, rainButton, storeButton, fireButton } from './elements.js'
import * as sounds from './sounds.js'

let currentSound = null; // Variável para armazenar o tema do som atualmente reproduzido

function handleButtonClick(event) {
    const clickedButton = event.target;
    const theme = clickedButton.dataset.theme;

    // Verifica se o som do tema atual está em reprodução
    const isCurrentSoundPlaying = currentSound === theme;

    // Interrompe a reprodução do som do tema atual, se necessário
    if (!isCurrentSoundPlaying && currentSound) {
        sounds.stopSound(currentSound);
    }

    // Reproduz o som do tema do botão clicado
    if (!isCurrentSoundPlaying) {
        sounds.playTheme(theme);
        currentSound = theme;
    } else {
        // Se o mesmo botão for clicado novamente, interrompe a reprodução do som
        sounds.stopSound(theme);
        currentSound = null;
    }

    // Desmarca todos os botões, exceto o botão clicado
    const allButtons = [treeButton, rainButton, storeButton, fireButton];
    allButtons.forEach(button => {
        if (button !== clickedButton) {
            button.checked = false;
        }
    });
}

export function start(minutes, seconds, soundTheme = null) {
    state.minutes = minutes;
    state.seconds = seconds;

    // Define o estado inicial dos botões de som
    const soundCheckboxes = document.querySelectorAll('[theme]');
    soundCheckboxes.forEach(checkbox => {
        checkbox.checked = checkbox.dataset.theme === soundTheme;
    });

    timer.updateDisplay();
    events.registerControls();

    // Reproduz o som do tema especificado
    if (soundTheme) {
        sounds.playTheme(soundTheme);
        currentSound = soundTheme;
    }
}

// Adiciona o evento de clique aos botões
treeButton.addEventListener('click', handleButtonClick);
rainButton.addEventListener('click', handleButtonClick);
storeButton.addEventListener('click', handleButtonClick);
fireButton.addEventListener('click', handleButtonClick);