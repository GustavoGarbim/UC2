document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('scene');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const snowflakes = [];
    const numSnowflakes = 800;
    let gravity = 0.02;
    const windStrength = 0.4;
    const mouse = { x: 0, y: 0, isPressed: false, lastX: 0, velocityX: 0 };

    class Snowflake {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * -canvas.height;
            this.size = Math.random() * 3 + 2;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = Math.random() * 1 + 0.5;
        }

        update() {
            // Calcular o efeito do vento baseado no movimento do mouse
            this.speedX += mouse.velocityX * 0.005; // Faz os flocos acompanharem o movimento do mouse

            // Aplicar vento baseado na posição do mouse
            const deltaX = mouse.x - this.x;
            const deltaY = mouse.y - this.y;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            if (distance < 100) {
                this.speedX += deltaX * windStrength * 0.01;
                this.speedY += deltaY * windStrength * 0.01;
            }

            // Aplicar gravidade (se o mouse não estiver pressionado)
            if (!mouse.isPressed) {
                this.speedY += gravity;
            } else {
                // Congelar a neve (parar o movimento vertical)
                this.speedY = 0;
            }

            // Atualizar posição
            this.x += this.speedX;
            this.y += this.speedY;

            // Limitar a velocidade horizontal para evitar aceleração excessiva
            this.speedX *= 0.98;

            // Reiniciar floco no topo quando atingir o chão
            if (this.y > canvas.height) {
                this.y = Math.random() * -canvas.height;
                this.x = Math.random() * canvas.width;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = Math.random() * 1 + 0.5;
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = 'white';
            ctx.fill();
            ctx.closePath();
        }
    }

    for (let i = 0; i < numSnowflakes; i++) {
        snowflakes.push(new Snowflake());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snowflakes.forEach((snowflake) => {
            snowflake.update();
            snowflake.draw();
        });
        requestAnimationFrame(animate);
    }

    // Atualizar posição do mouse e calcular velocidade
    window.addEventListener('mousemove', (event) => {
        mouse.velocityX = event.clientX - mouse.lastX; // Calcula a velocidade do movimento
        mouse.lastX = event.clientX; // Atualiza a última posição
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    });

    window.addEventListener('mousedown', () => {
        mouse.isPressed = true;
    });

    window.addEventListener('mouseup', () => {
        mouse.isPressed = false;
    });

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    animate();
});