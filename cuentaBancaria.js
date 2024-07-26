class CuentaB {
  #tipoCuenta;
  constructor(nombreTitular, saldo, tipocuenta) {
    this.nombreTitular = nombreTitular;
    this.saldo = saldo;
    this.#tipoCuenta = tipocuenta;
  }
  depositar(cantidad) {
    if (cantidad > 0) {
      this.saldo += cantidad;
      console.log(`Deposito realizado: ${cantidad}
                Tu nuevo saldo es de: ${this.saldo} `);
    } else {
      console.log("Debes ingresar una cantidad válida.");
    }
  }
  retirar(cantidad) {
    if (this.saldo >= cantidad) {
      this.saldo -= cantidad;
      console.log(`Retiro realizado: ${cantidad}`);
    } else {
      console.log("No se puede realizar retiro ¡SALDO INSUFICIENTE!");
    }
  }
  consultarSaldo() {
    console.log(`Tu saldo actual es de: ${this.saldo} `);
  }
  mostrarInformacion() {
    console.log(`Nombre del titular: ${this.nombreTitular}
            Saldo: ${this.saldo}
            Tipo de Cuenta: ${this.#tipoCuenta}`);
  }
}
let primera = new CuentaB("Mateo Aguilar", 20000, "Ahorro");
primera.depositar(20000);
primera.retirar(10000);
primera.consultarSaldo();
primera.mostrarInformacion();
