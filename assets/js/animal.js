class Animal {
    // Constructor de la clase Animal
    constructor(nombre, edad, img, comentarios, sonido) {
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._comentarios = comentarios;
        this._sonido = sonido;
    }

    // Getters y setters
    get nombre() {
        return this._nombre;
    }

    get edad() {
        return this._edad;
    }

    get img() {
        return this._img;
    }

    get comentarios() {
        return this._comentarios;
    }

    set comentarios(nuevoComentario) {
        this._comentarios = nuevoComentario;
    }

    get sonido() {
        return this._sonido;
    }

    // Método para reproducir el sonido del animal
    reproducirSonido() {
        const player = document.getElementById('player');
        player.src = `./assets/sounds/${this._sonido}`;
        player.play();
    }
}

// Clases hijas de la clase Animal
export class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    rugir() {
        return 'Rugido de león';
    }
}

export class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    aullar() {
        return 'Aullido de lobo';
    }
}

export class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    gruñir() {
        return 'Gruñido de oso';
    }
}

export class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    sisear() {
        return 'Siseo de serpiente';
    }
}

export class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    chillar() {
        return 'Chillido de águila';
    }
}
