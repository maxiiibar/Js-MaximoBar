const cardContainer = document.querySelector(".productos-container")
const generarTarjetas = (vector, contenedor) =>{
    const cards = vector.reduce((acc,item)=>{
        return acc + `
        <div class="card">
            <div class="imagen">
                <img src="./img/${item.imagen}">
            </div>
            <div class="informacion">
                <div class="titulo">
                    <h2>${ item.producto + " " + item.marca}</h2>
                </div>
                <div class="descripcion">
                    <p>Categoria: ${item.categoria}</p>
                    <p>Descripción: ${item.descripcion}</p>
                    <p>Precio: $${item.precio}</p>
                </div>
                <div class="boton">
                    <button>Añadir al Carrito</button>
                </div>
			</div>
        </div>
        `
    },"")
    contenedor.innerHTML = cards
}

generarTarjetas(productos, cardContainer)

const header = document.querySelector("header")
const contenedor = document.querySelector(".productos-container")

window.addEventListener("scroll", () => contenedor.getBoundingClientRect().top<10 ? header.classList.add("scroll") : header.classList.remove("scroll"))