class Carrera {
  #velocidadMaxima;
  #combustibleActual;
  constructor(marca, modelo, velocidadmax, combustibleactual) {
    this.marca = marca;
    this.modelo = modelo;
    this.#velocidadMaxima = velocidadmax;
    this.#combustibleActual = combustibleactual;
    this.velocidadActual = 0;
  }
  acelerar(combustible) {
    if (this.#combustibleActual > 0) {
      this.velocidadActual += combustible;
      console.log(`Ahora vas más rápido.`);
    } else {
      console.log(
        `Tu nivel de combustible es de: ${
          this.#combustibleActual
        } no puedes aumentar la velocidad.`
      );
    }
  }
  frenar(bajale) {
    this.velocidadActual -= bajale;
    if (this.velocidadActual < 0) {
      this.velocidadActual = 0;
    }
    console.log(`Redujiste la velocidad a: ${this.velocidadActual} km/h`);
  }
  recargarCombustible(combustible) {
    this.#combustibleActual += combustible;
    console.log(`Recargaste combustible: ${this.#combustibleActual} litros`);
  }

  mostrarEstado() {
    console.log(`Marca: ${this.marca}
        Modelo: ${this.modelo}
        Velocidad Máxima: ${this.#velocidadMaxima} km/h
        Combustible Actual: ${this.#combustibleActual} litros
        Velocidad Actual: ${this.velocidadActual} km/h`);
  }
}

let auto = new Carrera("Maserati", "Grecale 2024", 80, 60);
auto.acelerar(40);
auto.frenar(20);
auto.recargarCombustible(20);
auto.mostrarEstado();
