// Seleciona todos os links da navegação
const navLinks = document.querySelectorAll('nav a');

// Função para rolar suavemente até a seção
function scrollToSection(event) {
  const targetHref = this.getAttribute('href');

  // Verifica se o link é interno (começa com #)
  if (targetHref.startsWith('#')) {
    event.preventDefault(); // Evita o comportamento padrão do link
    const targetId = targetHref.substring(1); // Remove o "#" do href
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente até a seção
    }
  }
  // Se for um link externo, o comportamento padrão (navegar para o link) será mantido
}

// Função para alternar a classe "active"
function setActiveLink() {
  navLinks.forEach(link => link.classList.remove('active')); // Remove a classe "active" de todos os links
  this.classList.add('active'); // Adiciona a classe "active" ao link clicado
}

// Adiciona os eventos aos links
navLinks.forEach(link => {
  link.addEventListener('click', scrollToSection);
  link.addEventListener('click', setActiveLink);
});