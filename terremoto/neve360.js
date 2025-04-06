function mostrarCamada(nivel) {
    // Esconde todas as camadas
    document.querySelectorAll('#secao3d .camada').forEach(camada => {
        camada.style.display = 'none';
    });
    // Mostra a camada selecionada
    document.getElementById(`camada-${nivel}`).style.display = 'block';
}

// Mostra a primeira camada ao carregar a página
mostrarCamada(1);