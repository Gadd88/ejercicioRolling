// Crear un carrito de compras. 
// ■ Crear una aplicación de carrito de compras donde se ingresen
// productos como elementos en un array.
// ■ las tareas que debe hacer son las siguientes:
// ● Agregar producto al carrito
// ● Listar los productos del carrito
// ● Buscar un producto en el carrito
// ● Filtrar productos que coincidan con una palabra, parte de ella una letra
// ● Eliminar producto del carrito

// ● Filtrar productos que coincidan con una palabra, parte de ella
 listar
// o una letra
// ● Eliminar producto del carrito


let carrito = ["Gaseosa","Fideos","Arroz"]

carrito.push ("Gaseosa")
carrito.push ("Fideos")
carrito.push ("Arroz")

const listar = () => {
   
for (let i=0; i < carrito.lenght; i++){
    console.log(carrito[i])
}


}


const filtrar =(palabra)=>{
    let resultado= productos.filter(producto => producto.toLowerCase().includes(palabra.toLowerCase()));
    return console.log(resultado)
    
}
filtrar(palabra)

