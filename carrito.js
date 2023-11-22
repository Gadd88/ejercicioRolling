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
const buscarProducto = (str) => {
    let buscar = str;
    let encontrado = ''
    for (let i = 0; i < carrito.length; i++){
        if (productos[i].toLowerCase() === buscar.toLowerCase()){
            encontrado = productos[i]
            console.log(encontrado)
        }
    }
    if(encontrado=='') console.log('No existe el producto')
  }
  buscarProducto('agua');