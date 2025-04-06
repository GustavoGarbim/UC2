document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    
    const header = document.querySelector('.heder');
    const navLinks = document.getElementById('repon');
    
    // Adiciona o botão de menu
    header.appendChild(menuToggle);
    
    // Controla a abertura/fechamento do menu
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      menuToggle.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
    });
    
    // Fecha o menu quando um link é clicado (para mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
          navLinks.classList.remove('active');
          menuToggle.innerHTML = '☰';
        }
      });
    });
    
    // Fecha o menu quando a tela é redimensionada para maior que 768px
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
        menuToggle.innerHTML = '☰';
      }
    });
  });