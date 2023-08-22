const cardContainer = document.querySelector(".productos-container-carrito")
const unidadesElement = document.querySelector("#unidades")
const precioElement = document.querySelector("#precio")
const carritoVacioElement = document.querySelector("#carrito-vacio")
const totalesElement = document.querySelector(".totales")
const reiniciarElement = document.querySelector("#reiniciar")

console.log(reiniciarElement)

const generarTarjetasCarrito = () => {
  cardContainer.innerHTML = ""
  const memoria = JSON.parse(localStorage.getItem("productosCarrito"))
  if (memoria && memoria.length > 0) {
    memoria.forEach((elemento) => {
      const nuevoProducto = document.createElement("div")
      nuevoProducto.classList = "card-carrito"
      nuevoProducto.innerHTML = `
            <div class="imagen-carrito">
                <img src="./img/${
                  elemento.imagen || "imagen-no-disponible.png"
                }">
            </div>
            <h3>${elemento.producto}</h3>
            <p>Precio: $${elemento.precio || "(No Disponible)"}</p>
            <div>
                <button>-</button>
                <span class="cantidad">${elemento.cantidad}</span>
                <button>+</button>
            </div>
          `;
      cardContainer.appendChild(nuevoProducto)
      nuevoProducto
        .getElementsByTagName("button")[1]
        .addEventListener("click", () => {
          agregarAlCarrito(elemento)
          generarTarjetasCarrito()
          actualizarTotales()
        })
      nuevoProducto
        .getElementsByTagName("button")[0]
        .addEventListener("click", () => {
          restarAlCarrito(elemento)
          generarTarjetasCarrito()
          actualizarTotales()
          revisarMensajeVacio()
        })
    });
  }
};


const actualizarTotales = () => {
  const memoria = JSON.parse(localStorage.getItem("productosCarrito"))
  let unidades = 0, precio =0
  if (memoria && memoria.length > 0) {
    memoria.forEach(producto => {
      unidades += producto.cantidad
      precio += producto.cantidad * producto.precio
    })
  }
  unidadesElement.innerText = unidades
  precioElement.innerText = precio.toFixed(2)
}

generarTarjetasCarrito()
actualizarTotales()

const header = document.querySelector("header")
const contenedor = document.querySelector(".productos-container-carrito")

window.addEventListener("scroll", () =>
  contenedor.getBoundingClientRect().top < 100
    ? header.classList.add("scroll")
    : header.classList.remove("scroll")
)

const revisarMensajeVacio = () => {
  const memoria = JSON.parse(localStorage.getItem("productosCarrito"))
  carritoVacioElement.classList.toggle("escondido", memoria && memoria.length > 0)
  totalesElement.classList.toggle("escondido", !(memoria && memoria.length > 0))
}

revisarMensajeVacio()

reiniciarElement.addEventListener("click", () => {
  cardContainer.innerHTML = ""
  reiniciarCarrito()
  revisarMensajeVacio()
})