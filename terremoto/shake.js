const shakeButton = document.querySelector('.shake-button');

        shakeButton.addEventListener('click', () => {
            // Remove existing animation class if present
            document.body.classList.remove('screen-shake-active');

            // Add animation class after a tiny delay to ensure removal takes effect
            void document.body.offsetWidth; // Trigger reflow
            document.body.classList.add('screen-shake-active');

            // Remove animation class when it ends
            document.body.addEventListener('animationend', () => {
                document.body.classList.remove('screen-shake-active');
            }, { once: true });
        });