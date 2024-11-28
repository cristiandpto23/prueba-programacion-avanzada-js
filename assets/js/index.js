import { setupAnimalPreview } from './animalPreview.js';
import { Leon, Lobo, Oso, Serpiente, Aguila } from './animal.js';
import { anyadirAnimalAContainer } from './animalCard.js';

// IIFE para cargar la vista previa del animal
(async () => {
    await setupAnimalPreview();
})();

// Evento para registrar un animal
document.getElementById('btnRegistrar').addEventListener('click', async () => {
    // Obtener los valores de los campos del formulario
    const animal = document.getElementById('animal').value;
    const edad = document.getElementById('edad').value;
    const comentarios = document.getElementById('comentarios').value;

    // Variables para imagen y sonido
    let img, sonido;
    let animalSeleccionado;

    // Validar que se haya completado el formulario
    if (!animal || !edad || !comentarios) {
        alert('Por favor complete todos los campos antes de registrar el animal.');
        return;
    }

    // Obtener los datos del archivo JSON
    try {
        const response = await fetch('../../animales.json');
        if (!response.ok) {
            throw new Error('Error al obtener el archivo JSON');
        }
        const data = await response.json();
        const animalData = data.animales.find((bicho) => bicho.name === animal);

        if (!animalData) {
            console.error('Animal no encontrado en los datos');
            return;
        }

        img = animalData.imagen;
        sonido = animalData.sonido;

        // Crear el nuevo animal a través de la clase correspondiente con instancia
        if (animal === 'Leon') {
            animalSeleccionado = new Leon(animal, edad, img, comentarios, sonido);
        } else if (animal === 'Lobo') {
            animalSeleccionado = new Lobo(animal, edad, img, comentarios, sonido);
        } else if (animal === 'Oso') {
            animalSeleccionado = new Oso(animal, edad, img, comentarios, sonido);
        } else if (animal === 'Serpiente') {
            animalSeleccionado = new Serpiente(animal, edad, img, comentarios, sonido);
        } else if (animal === 'Aguila') {
            animalSeleccionado = new Aguila(animal, edad, img, comentarios, sonido);
        }

        // Mensaje de depuración
        console.log('Animal seleccionado:', animalSeleccionado);

        // Añadir el nuevo registro del animal al contenedor
        anyadirAnimalAContainer(animalSeleccionado);

        document.getElementById('animal').value = 'Seleccione un animal';
        document.getElementById('edad').value = 'Seleccione un rango de años';
        document.getElementById('comentarios').value = '';
    } catch (error) {
        console.error('Error al obtener los datos del animal:', error);
    }
});
