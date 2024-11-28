export function reproducirSonido(animal) {
    // crea objeto de audio
    const audio = new Audio(`/assets/sounds/${animal.sonido}`);
    // reproduce el audio
    audio.play();
}
