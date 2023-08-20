const productos = [
    {
        id: 1,
        producto: "Tarjeta Gráfica",
        categoria: "Componentes",
        precio: 399.99,
        marca: "Nvidia",
        imagen: "tarjeta_grafica.webp",
        descripcion: "Potente tarjeta gráfica para gaming de última generación.",
    },
    {
        id: 2,
        producto: "Monitor",
        categoria: "Periféricos",
        precio: 249.99,
        marca: "Dell",
        imagen: "monitor.webp",
        descripcion: "Monitor de alta resolución y excelente calidad de color.",
    },
    {
        id: 3,
        producto: "SSD",
        categoria: "Almacenamiento",
        precio: 89.99,
        marca: "Samsung",
        imagen: "ssd.webp",
        descripcion: "Unidad de estado sólido de gran capacidad y velocidad.",
    },
    {
        id: 4,
        producto: "Teclado Mecánico",
        categoria: "Periféricos",
        precio: 129.99,
        marca: "Corsair",
        imagen: "teclado.webp",
        descripcion: "Teclado mecánico con retroiluminación RGB personalizable.",
    },
    {
        id: 5,
        producto: "Procesador",
        categoria: "Componentes",
        precio: 299.99,
        marca: "Intel",
        imagen: "procesador.webp",
        descripcion: null,
    },
    {
        id: 6,
        producto: "Mouse Inalámbrico",
        categoria: "Periféricos",
        precio: 39.99,
        marca: "Logitech",
        imagen: "mouse.webp",
        descripcion: "Mouse ergonómico inalámbrico con precisión óptica.",
    },
    {
        id: 7,
        producto: "Memoria RAM",
        categoria: "Componentes",
        precio: 79.99,
        marca: "XPG",
        imagen: "ram.webp",
        descripcion: "Módulo de memoria RAM de alta velocidad para mejorar el rendimiento.",
    },
    {
        id: 8,
        producto: "Disco Duro Externo",
        categoria: "Almacenamiento",
        precio: 119.99,
        marca: "Western Digital",
        imagen: "disco_externo.webp",
        descripcion: "Disco duro externo de gran capacidad para almacenar tus archivos.",
    },
    {
        id: 9,
        producto: "Fuente de Alimentación",
        categoria: "Componentes",
        precio: 89.99,
        marca: "EVGA",
        imagen: "fuente_evga.webp",
        descripcion: "Fuente de alimentación eficiente y de alta potencia.",
    },
    {
        id: 10,
        producto: "Auriculares Gaming",
        categoria: "Audio",
        precio: 69.99,
        marca: "Razer",
        imagen: "auriculares.webp",
        descripcion: "Auriculares gaming con sonido envolvente y micrófono retráctil.",
    },
];

const cardContainer = document.querySelector(".productos-container")
const generarTarjetas = (vector, contenedor) =>{
    const cards = vector.reduce((acc,item)=>{
        return acc + `
        <div class="card" id="producto-${item.id}">
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