class Inventario{
    #cantidadEnStock
    constructor(codigoProducto,nombreProducto,cantidadStock){
        this.codigoProducto = codigoProducto;
        this.nombreProducto = nombreProducto;
        this.#cantidadEnStock = cantidadStock;
    }
    agregarProducto(comprar){
        if(this.#cantidadEnStock >0){
            this.#cantidadEnStock += comprar
            console.log(`${this.nombreProducto} : ${comprar} unidades`);
        }// else{
        //     console.log(`Ya hay muchos ${this.nombreProducto} en la tienda`);
        // }
    }
    retirarProducto(vender){
        // if(this.#cantidadEnStock > 0){
            console.log(`En la tienda hay ${this.#cantidadEnStock} unidades de ${this.nombreProducto}`)
            if(this.#cantidadEnStock > 0){
                this.#cantidadEnStock -= vender;
                console.log(`Quedan ${this.#cantidadEnStock} unidades de ${this.nombreProducto} en la tienda`)
            }else{
                console.log(`No hay ${this.nombreProducto} disponibles`)
            }
        // }else{
        //     console.log(`Producto: ${this.nombreProducto} 
        //         Disponible: ${this.#cantidadEnStock} `)
    }
    mostrarStock(){
        console.log(`
            Código del Producto: ${this.codigoProducto}
            Nombre del producto:  ${this.nombreProducto}
            Cantidad disponible: ${this.#cantidadEnStock}`
        )
    }
}
let producto = new Inventario (123, "Motosierra", 12);
producto.agregarProducto(2);
producto.retirarProducto(4);
producto.mostrarStock();