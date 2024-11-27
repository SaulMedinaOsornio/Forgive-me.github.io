const noButton = document.querySelector('.no-button');
const yesButton = document.querySelector('#yes-button');
const header = document.querySelector('h1');
const image = document.querySelector('img');

noButton.addEventListener('click', (e) => {
    e.preventDefault();
    const currentWidth = yesButton.offsetWidth;
    const currentHeight = yesButton.offsetHeight;
    yesButton.style.width = currentWidth * 1.1 + 'px';
    yesButton.style.height = currentHeight * 1.1 + 'px';
});

yesButton.addEventListener('click', () => {
    // Cambiar el encabezado
    header.textContent = '❤️ ¡Te amo mucho! ❤️ Eres la mejor persona en el mundo, hermosa y inteligente Te amo mucho ❤️';
    header.style.color = '#ff6f61'; // Cambiar el color del texto

    // Cambiar la imagen
    image.src = 'https://media.tenor.com/pqx__VdGqfYAAAAi/yelynn-yelynn-hun-hun.gif';

    // Ocultar los botones
    yesButton.style.display = 'none';
    noButton.style.display = 'none';
});
