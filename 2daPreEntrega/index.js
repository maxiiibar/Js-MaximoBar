class item {
    constructor (idItem, nombreItem, marcaItem, precioItem, cantidadItem, categoriaItem){
        this.id = idItem;
        this.nombre = nombreItem;
        this.marca = marcaItem;
        this.precio = precioItem;
        this.cantidad = cantidadItem;
        this.categoria = categoriaItem;
    }
    nombreCompleto () { return `${this.marca} ${this.nombre}` }
    precioEscrito () { return "$" + String(this.precio)}
}

function aMayuscula(word) {
    return word[0].toUpperCase() + word.slice(1)
}

const catalogo = [
    new item("00", "Quadcast", "Hyperx", 93500, 50, "Microfono"),
    new item("01", "G435", "Logitech", 75000, 50, "Auricular"),
    new item("02", "Kumara K552", "Redragon", 30000, 75, "Teclado"),
    new item("03", "G203", "Logitech", 19000, 100, "Mouse"),
    new item("04", "RTX 3060ti", "PNY", 300000, 20, "Placa de video"),
    new item("05", "Yeti", "Blue", 100000, 25, "Microfono"),
    new item("06", "Cloud II Wireless", "Hyperx", 70000, 150, "Auricular"),
    new item("07", "Alloy FPS", "Hyperx", 124000, 25, "Teclado"),
    new item("08", "G305", "Logitech", 28500, 100, "Mouse"),
    new item("09", "RX 6650 XT", "XFX", 230000, 20, "Placa de video"),
    new item("10", "SM7B", "Shure", 322000, 15, "Microfono"),
    new item("11", "G733", "Logitech", 77000, 60, "Auricular"),
    new item("12", "Aurora G715", "Logitech", 116600, 30, "Teclado"),
    new item("13", "G PRO X Wireless", "Logitech", 77100, 100, "Mouse"),
    new item("14", "RTX 3090", "MSI", 590500, 10, "Placa de video")
]
catalogo.sort((a,b)=>{
    const aNombre = a.nombre.toLowerCase()
    const bNombre = b.nombre.toLowerCase()
    if (aNombre<bNombre){
        return -1
    }
    else if ( aNombre>bNombre ){
        return 1
    }
    return 0
})
const eleccion = prompt("Elija una categoria de productos:")
const eleccionCliente = catalogo.filter((cat) => {
    return cat.categoria == aMayuscula(eleccion.toLowerCase())
})
const productosFiltrados = []
if (eleccionCliente.length === 0){
    let cont = 0
    while (cont === 0) {
        const nuevaEleccion = prompt("Categoria no encontrada, porfavor intentelo de nuevo :")
        const nuevaEleccionCliente = catalogo.filter((cate) => {
            return cate.categoria == aMayuscula(nuevaEleccion.toLowerCase())
        })
        if (nuevaEleccionCliente.length !== 0){
            cont++
            nuevaEleccionCliente.forEach((cliente) => {
                productosFiltrados.push(cliente)
            })
        }
    }
}

if (eleccionCliente.length !==0){
    alert("Productos disponibles: ")
    let contador = 1
    eleccionCliente.forEach((elemento) => {
        alert( contador + ". " + elemento.nombre + ", marca " + elemento.marca + ", Precio: " + elemento.precioEscrito())
        contador++
    })
    const eleccionProducto = prompt("Ingrese el producto que desea comprar o 0 para salir: (el nombre debe estar escrito exactamente igual a como se mostró)")
    if (eleccionProducto !== "0"){
        const productoElegido = eleccionCliente.find((elemento) => {
            return elemento.nombre == eleccionProducto
        })
        const cantidade = prompt ("Ingrese cantidad: ")
        alert("Su " + productoElegido.nombreCompleto() + " ya está preparado para ir a su domicilio. Precio Final: $" + productoElegido.precio*cantidade)
        alert("Muchas gracias por su visita")
    }
    else{
        alert("Muchas gracias por su visita")
    }
}
else{
    alert("Productos disponibles: ")
    let contador = 1
    productosFiltrados.forEach((elemento) => {
        alert( contador + ". " + elemento.nombre + ", marca " + elemento.marca + ", Precio: " + elemento.precioEscrito())
        contador++
    })
    const eleccionProducto = prompt("Ingrese el producto que desea comprar o 0 para salir: (el nombre debe estar escrito exactamente igual a como se mostró)")
    if (eleccionProducto !== "0"){
        const productoElegido = productosFiltrados.find((elemento) => {
            return elemento.nombre == eleccionProducto
        })
        const cantidade = prompt ("Ingrese cantidad: ")
        alert("Su " + productoElegido.nombreCompleto() + " ya está preparado para ir a su domicilio. Precio Final: $" + productoElegido.precio*cantidade)
        alert("Muchas gracias por su visita")
    }
    else{
        alert("Muchas gracias por su visita")
    }
}