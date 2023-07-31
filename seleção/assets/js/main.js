const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Obtém o número de cartões que podem caber no carrossel de uma só vez
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insere cópias dos últimos cartões no início do carrossel para rolagem infinita
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insere cópias dos primeiros cartões no final do carrossel para rolagem infinita
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Ajusta a posição inicial do carrossel para exibir os cartões corretos
carousel.scrollLeft = firstCardWidth * cardPerView;

// Adiciona ouvintes de eventos para os botões de seta para rolar o carrossel para a esquerda e para a direita
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Registra o cursor inicial e a posição de rolagem do carrossel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // Se o carrossel estiver no início, role até o fim
    if (carousel.scrollLeft === 0) {
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
    }
    // Se o carrossel estiver no final, role até o início
    else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.scrollLeft = carousel.offsetWidth;
    }
}

carousel.addEventListener("mousedown", dragStart);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
