const items = document.querySelectorAll('#secao-curiosidade .items');

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