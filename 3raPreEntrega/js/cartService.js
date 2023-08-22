const nuevoProductoParaLocal = producto => {
    const nuevoProducto = producto
    nuevoProducto.cantidad = 1
    return nuevoProducto
}
  
const agregarAlCarrito = (producto) => {
    const memoria = JSON.parse(localStorage.getItem("productosCarrito"))
    let contador = 0
    if (!memoria) {
        const nuevoProducto = nuevoProductoParaLocal(producto)
        localStorage.setItem("productosCarrito", JSON.stringify([nuevoProducto]))
        cont = 1
    }
    else{
        const indiceProducto = memoria.findIndex(elemento => elemento.id === producto.id)
        const nuevaMemoria = memoria
        if (indiceProducto === -1){
            nuevaMemoria.push(nuevoProductoParaLocal(producto))
            cont = 1
        }
        else{
            nuevaMemoria[indiceProducto].cantidad++
            cont = nuevaMemoria[indiceProducto].cantidad
        }
        localStorage.setItem("productosCarrito", JSON.stringify(nuevaMemoria))
    }
    actualizarNumeroCarrito()
    return cont
};

const restarAlCarrito =(producto) =>{
    const memoria = JSON.parse(localStorage.getItem("productosCarrito"))
    const indiceProducto = memoria.findIndex(elemento => elemento.id === producto.id)
    if (memoria[indiceProducto].cantidad===1){
        memoria.splice(indiceProducto,1)
        localStorage.setItem("productosCarrito", JSON.stringify(memoria))
    }
    else{
        memoria[indiceProducto].cantidad--
        localStorage.setItem("productosCarrito", JSON.stringify(memoria))
    }
    actualizarNumeroCarrito()
}

const cuentaCarritoElement = document.getElementById("cuenta-carrito")
const actualizarNumeroCarrito = () => {
    const memoria = JSON.parse(localStorage.getItem("productosCarrito"))
    if (memoria && memoria.length > 0){
        const cant = memoria.reduce((acc, item) => acc+item.cantidad,0)
        cuentaCarritoElement.innerText = cant
    }
    else{
        cuentaCarritoElement.innerText = 0
    }
}

const reiniciarCarrito = () => {
    localStorage.removeItem("productosCarrito");
    actualizarNumeroCarrito()
}

actualizarNumeroCarrito()