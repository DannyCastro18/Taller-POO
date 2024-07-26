class Empleados{
    #salario
    constructor(nombre,apellidos,salario){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.#salario = salario;
        this.sueldoTotal = 0;
    }
    calcularSueldoNeto(total){
        this.sueldoTotal += total+this.#salario;
        console.log(`Tu sueldo neto es: ${this.sueldoTotal}`)
    }
    mostrardatos(){
        console.log(`Empleado
            Nombre: ${this.nombre}
            Apellidos: ${this.apellidos}
            Salario: ${this.#salario}
            Sueldo total: ${this.sueldoTotal}`)
    }
}
let dato = new Empleados("Cristina", "Salazar García", 150000);
dato.calcularSueldoNeto(100000);
dato.mostrardatos();