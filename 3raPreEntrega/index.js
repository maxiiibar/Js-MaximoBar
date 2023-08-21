const cardContainer = document.querySelector(".productos-container")
console.log(cardContainer)
/* const generarTarjetas = (vector, contenedor) => {
  const cards = vector.reduce((acc, item) => {
    return (
      acc +
      `
        <div class="card">
            <div class="imagen">
                <img src="./img/${item.imagen || "imagen-no-disponible.png"}">
            </div>
            <div class="informacion">
                <div class="titulo">
                    <h2>${item.producto + " " + (item.marca || "(Marca No Disponible)")}</h2>
                </div>
                <div class="descripcion">
                    <p>Categoria: ${item.categoria || "(No Disponible)"}</p>
                    <p>Descripción: ${item.descripcion || "(No Disponible)"}</p>
                    <p>Precio: $${item.precio || "(No Disponible)"}</p>
                </div>
                <div class="boton">
                    <button>Añadir al Carrito</button>
                </div>
			</div>
        </div>
        `
    );
  }, "");
  contenedor.innerHTML = cards;
};

generarTarjetas(productos, cardContainer); */

const generarTarjeta = elementos => {
  elementos.forEach(elemento => {
    const nuevoProducto = document.createElement("div")
    nuevoProducto.classList = "card"
    nuevoProducto.innerHTML = `
      <div class="imagen">
        <img src="./img/${elemento.imagen || "imagen-no-disponible.png"}">
      </div>
      <div class="informacion">
        <div class="titulo">
          <h2>${elemento.elemento + " " + (elemento.marca || "(Marca No Disponible)")}</h2>
        </div>
      <div class="descripcion">
          <p>Categoria: ${elemento.categoria || "(No Disponible)"}</p>
          <p>Descripción: ${elemento.descripcion || "(No Disponible)"}</p>
          <p>Precio: $${elemento.precio || "(No Disponible)"}</p>
      </div>
      <div class="boton">
          <button>Añadir al Carrito</button>
      </div>
    `
    cardContainer.appendChild(nuevoProducto)
  })
}

generarTarjeta(productos)

const header = document.querySelector("header");
const contenedor = document.querySelector(".productos-container");

window.addEventListener("scroll", () =>
  contenedor.getBoundingClientRect().top < 100
    ? header.classList.add("scroll")
    : header.classList.remove("scroll")
);

/* const agregarAlCarrito = (producto) => {
  const memoria = localStorage.getItem("productosCarrito");
  console.log(memoria);
  if (!memoria) {
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    localStorage.setItem("productosCarrito", JSON.stringify([nuevoProducto]));
  }
};
 */