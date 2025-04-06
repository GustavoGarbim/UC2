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











const items = document.querySelectorAll('#secao-curiosidade .item');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Adiciona a classe 'visible' com um pequeno atraso para cada item
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 200); // Atraso de 200ms entre cada item
            observer.unobserve(entry.target); // Para de observar o item após a animação
        }
    });
}, {
    threshold: 0.2 // Dispara a animação quando 20% do item estiver visível
});

items.forEach(item => {
    observer.observe(item);
});