// el getItem de LS obtiene la informacion de productos-en-carrito
// y luego el JSON parse lo combierte a objeto javascript
const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

const contenedorCarritoVacio = document.getElementById("carrito-vacio");
const contenedorCarritoProductos = document.getElementById("carrito-productos");
const contenedorCarritoAcciones = document.getElementById("carrito-acciones");
const contenedorCarritoComprado = document.getElementById("carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

function cargarProductosCarrito() {

    if (productosEnCarrito) {

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");

        contenedorCarritoProductos.innerHTML = "";

        productosEnCarrito.forEach((producto) => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <img class= "carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}" />
                <div class="carrito-producto-titulo">
                    <small>${producto.titulo}</small>
                    <h3>Abrigo 01</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>${producto.cantidad}</small>
                    <p>1</p>
                </div>

                <div class="carrito-producto-precio">
                    <small>${producto.precio}</small>
                    <p>$</p>
                </div>

                <div class="carrito-producto-subtotal">
                    <small>${producto.precio} * ${producto.cantidad}</small>
                    <p>$20000</p>
                </div>
                <button class="carrito-producto-eliminar" id ="${producto.id}">
                    <i class="bi bi-trash3">Eliminar</i>
                </button>
                `;
                contenedorCarritoProductos.append(div);
        })
    } else {
    // que el carrito se vacie
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }
    actualizarBotonesEliminar();
}

cargarProductosCarrito();

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-Eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });

}

function eliminarDelCarrito() {
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito.splice(index, 1);
}

swal.fire({
    title: "FELICITACIONES!",
    text: "Realizaste tu compra con exito!",
    icon: "success",
    confirmButtonText: "Aww Genial!",
});
    