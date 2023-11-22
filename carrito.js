// Crear un carrito de compras. 
// ■ Crear una aplicación de carrito de compras donde se ingresen
// productos como elementos en un array.
// ■ las tareas que debe hacer son las siguientes:
// ● Agregar producto al carrito
// ● Listar los productos del carrito
// ● Buscar un producto en el carrito
// ● Filtrar productos que coincidan con una palabra, parte de ella una letra
// ● Eliminar producto del carrito
// ● Filtrar productos que coincidan con una palabra, parte de ellalistar
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

const agregarProducto = (item) =>{
    let producto = item
    if(carrito.find(item => item == producto)){
        console.log('el producto ya se encuentra en el carrito')
    }else{
        carrito.push(producto)
        console.log('Producto agregado correctamente')
    }
}
agregarProducto('carne')

const listarProductos = () => { 
  for (let i=0; i < carrito.lenght; i++){
    console.log(carrito[i])
  } 
}

const filtrarProducto =(palabra)=>{
    let resultado= productos.filter(producto => producto.toLowerCase().includes(palabra.toLowerCase()));
    return console.log(resultado)
}
filtrar(palabra)

