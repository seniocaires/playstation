
const video = document.getElementById('video-tela');
let ligado = false;

video.addEventListener("timeupdate", function () {

    // se estiver ligado, pausar no último frame do video
    if (ligado && video.currentTime > video.duration - 0.5) {
        video.pause();
    }
});


document.getElementById("area-power").addEventListener("click", function (event) {
    event.preventDefault();
    const imagemLigado = document.getElementById('imagem-ligado');
    const imagemDesligado = document.getElementById('imagem-desligado');

    const zIndexImagemLigado = window.getComputedStyle(imagemLigado).zIndex;
    const zIndexImagemDesligado = window.getComputedStyle(imagemDesligado).zIndex;

    imagemLigado.style.zIndex = zIndexImagemDesligado;
    imagemDesligado.style.zIndex = zIndexImagemLigado;
    
    if (ligado) { 
        desligar();
    } else {
        ligar();
    }
});

document.getElementById("area-reset").addEventListener("click", function (event) {
    event.preventDefault();

    if (ligado) {
        video.removeAttribute("loop");
        video.src = 'videos/reset.mp4';
        video.play();
        setTimeout(() => { ligar(); }, 1100);
    }
});

function ligar() {
    video.removeAttribute("loop");
    video.src = Math.random() < 0.5 ? 'videos/sucesso.mp4' : 'videos/erro.mp4';
    video.play();
    ligado = true;
    video.muted = false;
}

function desligar() {
    video.setAttribute("loop", "loop");
    video.src = 'videos/desligado.mp4';
    video.play();
    ligado = false;
    video.muted = true;
}

window.onload = function () {
    video.play();
    video.muted = true;
};
