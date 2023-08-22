const cardContainer = document.querySelector(".productos-container")
const generarTarjeta = (elementos) => {
  elementos.forEach((elemento) => {
    const nuevoProducto = document.createElement("div")
    nuevoProducto.classList = "card"
    nuevoProducto.innerHTML = `
      <div class="imagen">
        <img src="./img/${elemento.imagen || "imagen-no-disponible.png"}">
      </div>
      <div class="informacion">
        <div class="titulo">
          <h2>${
            elemento.producto +
            " " +
            (elemento.marca || "(Marca No Disponible)")
          }</h2>
        </div>
      <div class="descripcion">
          <p>Categoria: ${elemento.categoria || "(No Disponible)"}</p>
          <p>Descripción: ${elemento.descripcion || "(No Disponible)"}</p>
          <p>Precio: $${elemento.precio || "(No Disponible)"}</p>
      </div>
      <div class="boton">
          <button>Añadir al Carrito</button>
      </div>
    `;
    cardContainer.appendChild(nuevoProducto)
    nuevoProducto
      .getElementsByTagName("button")[0]
      .addEventListener("click", () => agregarAlCarrito(elemento))
  });
};

generarTarjeta(productos)

const header = document.querySelector("header")
const contenedor = document.querySelector(".productos-container")

window.addEventListener("scroll", () =>
  contenedor.getBoundingClientRect().top < 100
    ? header.classList.add("scroll")
    : header.classList.remove("scroll")
);
