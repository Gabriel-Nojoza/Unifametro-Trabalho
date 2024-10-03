// Seleciona todos os links de navegação
const navLinks = document.querySelectorAll('.navmenu a, .bottom-navmenu a');

// Adiciona um evento de clique a cada link
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        alert(`Você clicou em: ${this.innerText}`); // Alerta com o texto do link
    });
});

// Seleciona os ícones de redes sociais
const socialIcons = document.querySelectorAll('.nav-icon i');

// Adiciona animações ao passar o mouse nos ícones
socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.2)'; // Aumenta o tamanho do ícone
    });

    icon.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)'; // Retorna ao tamanho original
    });

    // Opcional: Adiciona um evento de clique nos ícones
    icon.addEventListener('click', function() {
        alert(`Você clicou no ícone: ${this.classList[1]}`); // Mostra qual ícone foi clicado
    });
});

// Adiciona eventos ao menu inferior e ao cabeçalho
const bottomNav = document.querySelector('.bottom-nav');
const header = document.querySelector('header');

bottomNav.addEventListener('mouseenter', () => {
    header.classList.add('header-active');
});

bottomNav.addEventListener('mouseleave', () => {
    header.classList.remove('header-active');
});
