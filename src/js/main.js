const botaoPlataforma = document.querySelector('.botao-plataforma');
const plataformas = botaoPlataforma.querySelector('.plataformas');

botaoPlataforma.addEventListener('click', () => {
    plataformas.classList.toggle('ativo');
})