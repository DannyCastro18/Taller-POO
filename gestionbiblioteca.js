class BibliotecaM{
    #duracion
    constructor(titulo, artista, duracion){
        this.titulo = titulo
        this.artista = artista
        this.#duracion = duracion
        
    }
    get duracion(){
        return this.duracion
    }
}
class Coleccion{
    constructor(){
        this.coleccion = [];
    }
    agregarCancion(cancion){
        this.coleccion.push(cancion)
    }
    eliminarCancion(titulo){
        for(let i = 0; i< this.coleccion.length; i++)
            if(this.coleccion[i].titulo === titulo){
                this.coleccion.splice(i,1);
                break;
            }  
    }
    mostrarDetalles(){
        for(let i = 0; i< this.coleccion.length; i++){
            console.log("Titulo: " + this.coleccion[i].titulo)
        }
    }
}
let coleccion = new Coleccion();
let cancion1 = new BibliotecaM("A veces a besos", "Greeicy", "3:11");
let cancion2 = new BibliotecaM("Mirame", "Blessed", "2:34");
let cancion3 = new BibliotecaM("Nada", "Cazzu", "5:05");
coleccion.agregarCancion(cancion1);
coleccion.agregarCancion(cancion2);
coleccion.agregarCancion(cancion3);
coleccion.mostrarDetalles();
coleccion.eliminarCancion("Mirame");
coleccion.mostrarDetalles();