// Crear un carrito de compras. 
// ■ Crear una aplicación de carrito de compras donde se ingresen
// productos como elementos en un array.
// ■ las tareas que debe hacer son las siguientes:
// ● Agregar producto al carrito
// ● Listar los productos del carrito
// ● Buscar un producto en el carrito
// ● Filtrar productos que coincidan con una palabra, parte de ella
// o una letra
// ● Eliminar producto del carrito

let carrito = ['pan', 'aceite', 'agua']

const eliminarProducto = (str) =>{
    let producto = str
    let nuevoCarrito = carrito.filter(item => item.toLowerCase() !== producto.toLowerCase())
    carrito = nuevoCarrito
    console.log(carrito)
}

eliminarProducto('agua')