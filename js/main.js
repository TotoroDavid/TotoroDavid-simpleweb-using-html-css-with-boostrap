const altura = document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById('fondo');

window.onscroll = () => {
    const anchoFondo = (window.pageYOffset / altura) * 1200;
    fondo.style.width = anchoFondo + '%';
}