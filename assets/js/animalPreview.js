export async function setupAnimalPreview() {
    document.getElementById('animal').addEventListener('change', async (event) => {
        // Obtener el nombre del animal seleccionado
        const nombre = event.target.value;
        // Obtener el elemento donde se mostrará la vista previa
        const vistaPrevia = document.getElementById('preview');
        // Crear un elemento de imagen
        const img = document.createElement('img');
        // Variable para almacenar el nombre de la imagen
        let imagen = '';

        try {
            // Obtener el archivo JSON
            const response = await fetch('../../animales.json');
            // Verificar que la respuesta sea exitosa
            if (!response.ok) {
                throw new Error('Error al obtener el archivo JSON');
            }
            const data = await response.json();
            // Verificar que data.animales esté definido
            if (!data || !data.animales) {
                // Mostrar un mensaje en consola en caso de error
                console.error('data.animales no está definido');
                return;
            }

            // Buscar el animal por nombre
            const animalData = data.animales.find((animal) => animal.name === nombre);

            // Crear la imagen
            imagen = animalData.imagen;
            img.src = `./assets/imgs/${imagen}`;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'contain';
            vistaPrevia.replaceChildren(img);
        } catch (error) {
            // En caso de error, mostrar un mensaje en consola
            console.error('Error al obtener la imagen:', error);
        }
    });
}
