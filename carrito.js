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

const filtrar =(palabra)=>{
    let resultado= productos.filter(producto => producto.toLowerCase().includes(palabra.toLowerCase()));
    return console.log(resultado)
    
}
filtrar(palabra)