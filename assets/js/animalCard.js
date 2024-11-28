import { reproducirSonido } from './animalSound.js';
import { mostrarModal } from './showModal.js';

export function anyadirAnimalAContainer(animal) {
    const animalContainer = document.getElementById('Animales');

    // Crear el card del animal
    const card = document.createElement('div');
    card.classList.add('card', 'bg-dark', 'text-white', 'text-center', 'm-2');
    card.style.width = '8rem';

    // Crear la imagen del animal
    const img = document.createElement('img');
    // Mensaje de depuración
    console.log(`Ruta de la imagen: /assets/imgs/${animal.img}`);

    // Agregar atributos a la imagen
    img.src = `/assets/imgs/${animal.img}`;
    img.alt = animal.nombre;
    img.classList.add('card-img-top');
    img.style.height = '125px';
    img.style.objectFit = 'cover';
    img.addEventListener('click', () => {
        mostrarModal(animal);
    });

    // Crear footer de la card
    const footer = document.createElement('div');
    footer.classList.add('card-footer', 'd-flex', 'justify-content-center', 'bg-secondary');

    // Crear el img-botón de sonido
    const imgFooter = document.createElement('img');
    imgFooter.src = '/assets/imgs/audio.svg';
    imgFooter.alt = 'audio';
    imgFooter.style.width = '20px';
    imgFooter.style.cursor = 'pointer';

    // Evento para reproducir el sonido del animal
    imgFooter.addEventListener('click', () => {
        reproducirSonido(animal);
    });

    // Agregar el img-botón al footer
    footer.appendChild(imgFooter);
    card.appendChild(img);
    card.appendChild(footer);

    // Agregar la card al contenedor de animales
    animalContainer.appendChild(card);
}
