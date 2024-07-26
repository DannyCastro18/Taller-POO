class Biblioteca {
  #disponible;
  constructor(titulo, autor, disponible) {
    this.titulo = titulo;
    this.autor = autor;
    this.#disponible = disponible;
  }
  prestarLibro(prestar) {
    if (this.#disponible > 0) {
      this.#disponible += prestar;
      console.log(`${this.titulo} esta disponible.`);
    } else {
      console.log(`${this.titulo} no está disponible.`);
    }
  }
  devolverLibro(devuelta) {
    if (devuelta > 0) {
      this.#disponible += devuelta;
      console.log(`${this.titulo} está disponible nuevamente.`);
    } else {
      console.log(`${this.titulo} aun no está disponible.`);
    }
  }
  mostrarEstado() {
    console.log(`Título: ${this.titulo}
            Autor: ${this.autor}
            Disponibilidad: ${this.#disponible}`);
  }
}
class LibDigital extends Biblioteca {
  constructor(titulo, autor, disponible, formato) {
    super(titulo, autor, disponible);
    this.formato = formato;
  }
  mostrarEstado() {
    console.log(`Título: ${this.titulo}
            Autor: ${this.autor}
            Disponibilidad: ${this.disponible}
            Formato: ${this.formato}`);
  }
}
let libro = new Biblioteca("A través de mi ventana", "Ariana Godoy", 1);
libro.prestarLibro();
libro.devolverLibro(2);
libro.mostrarEstado();

let digital = new LibDigital(
  "De sangre y cenizas",
  "Jennifer L. Armentrout",
  "Si",
  "PDF"
);
digital.prestarLibro(2);
digital.devolverLibro(1);
digital.mostrarEstado();
