let index = 0;

function mover(direcao) {
    const itens = document.querySelectorAll('.carrossel-item');
    index += direcao;

    if (index < 0) {
        index = itens.length - 1;
    } else if (index >= itens.length) {
        index = 0;
    }

    const container = document.querySelector('.carrossel-container');
    container.style.transform = `translateX(-${index * 100}%)`;
}
