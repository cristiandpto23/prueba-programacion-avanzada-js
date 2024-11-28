export function mostrarModal(animalejo) {

    // Mensaje de depuración
    console.log(animalejo);

    // Crear el modal
    const modalBody = document.querySelector('.modal-body');
    const exampleModal = document.getElementById('exampleModal')
    // Se asigna el contenido
    modalBody.innerHTML = `
        <div class="text-center text-white">
            <div>
                <img class="w-100" src="./assets/imgs/${animalejo.img}" alt="${animalejo.nombre}"/>
                <p class="fw-semibold my-1 text-white">${animalejo.edad}</p>
                <p class="fw-bold text-white">Comentarios</p>
            </div>

            <div>
                <p class="fst-italic">${animalejo.comentarios}</p>
            </div>
        </div>
    `;

    // crea una instancia de Bootstrap Modal en #exampleModal
    const modal = new bootstrap.Modal(exampleModal);
    // muestra el modal
    modal.show();
}
