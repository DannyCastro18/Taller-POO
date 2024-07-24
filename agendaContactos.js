class Agenda{
    constructor(nombre, apellido, telefono, correo){
        this.nombre = nombre
        this.apellido = apellido
        this.telefono = telefono
        this.correo = correo
    }
    
} class Contacto{
    #Contacto
    constructor(){
        this.numero = [];
    }
    agregarContacto(contact){
        this.numero.push(contact)
    }
    editarContacto(nombre,nuevonombre, apellido, nuevoTelefono, nuevocorreo){
        for(let i = 0; i< this.numero.length; i++)
            if(this.numero[i].nombre === nombre){
                this.numero[i].nombre = nuevonombre;
                this.numero[i].apellido = apellido;
                this.numero[i].telefono =nuevoTelefono;
                this.numero[i].correo =nuevocorreo;  
                break;  
            }

    }
    eliminarContacto(nombre){
        for(let i = 0; i< this.numero.length; i++)
            if(this.numero[i].nombre === nombre){
                this.numero.splice(i,1);
                break;
            }  
    }
    mostrarContacto(){
        for(let i = 0; i< this.numero.length; i++)
            console.log("Nombre: " + this.numero[i].nombre +" Apellido: " + this.numero[i].apellido+ " Teléfono: " + this.numero[i].telefono
          + " Correo: " + this.numero[i].correo)
    }
}
let numero = new Contacto();
let persona1 = new Agenda("Camilo", "Vasquez", 3006541231, "camivasquez@gmail.com")
let persona2 = new Agenda("Xiomara", "Castillo", 3157890234, "xiocastillo@gmail.com")
let persona3 = new Agenda("Carmen", "Montenegro", 3208764509, "carmenmontenegro@gmail.com")
let persona4 = new Agenda("Santiago", "Buitrago", 3004608972, "santiB@gmail.com")
numero.agregarContacto(persona1);
numero.agregarContacto(persona2);
numero.agregarContacto(persona3);
numero.agregarContacto(persona4);
numero.mostrarContacto();
numero.eliminarContacto("Carmen");
numero.mostrarContacto();
numero.editarContacto("Camilo","Sarha", "Castro", 3006452387, "sarhaCastr0@gmail.com");
numero.mostrarContacto();