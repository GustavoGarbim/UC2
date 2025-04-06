document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audio-player');
    const playPauseBtn = document.getElementById('play-pause');
    const volumeControl = document.getElementById('volume-control');
    const volumeIcon = document.getElementById('volume-icon');

    // Controle de play/pause
    playPauseBtn.addEventListener('click', function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.textContent = '⏸';
        } else {
            audioPlayer.pause();
            playPauseBtn.textContent = '▶';
        }
    });

    // Controle de volume
    volumeControl.addEventListener('input', function() {
        audioPlayer.volume = volumeControl.value;
        
        // Atualiza o ícone do volume conforme o nível
        if (volumeControl.value == 0) {
            volumeIcon.textContent = '🔇';
        } else if (volumeControl.value < 0.5) {
            volumeIcon.textContent = '🔉';
        } else {
            volumeIcon.textContent = '🔊';
        }
    });
});