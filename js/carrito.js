const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

const contenedorCarritoVacio = document.getElementById("carrito-vacio");
const contenedorCarritoProductos = document.getElementById("carrito-productos");
const contenedorCarritoAcciones = document.getElementById("carritoa-acciones");
const contenedorcarritoComprado = document.getElementById("carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

function cargarProductosCarrito() {

    if (productosEnCarrito) {

        contenedorCarritoVacio.claslist.add("disabled");
        contenedorCarritoProductos.claslist.remove("disabled");
        contenedorCarritoAcciones.claslist.remove("disabled");
        contenedorcarritoComprado.claslist.add("disabled");

        contenedorCarritoProductos.innerHTML = "";

        productosEnCarrito.forEach((producto) => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.titulo}" />
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
                    <p>$20000</p>
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
        contenedorCarritoVacio.claslist.remove("disabled");
        contenedorCarritoProductos.claslist.add("disabled");
        contenedorCarritoAcciones.claslist.add("disabled");
        contenedorcarritoComprado.claslist.add("disabled");
    }
    actualizarBotonesEliminar();
}

cargarProductosCarrito();

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".producto-producto-Eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCArrito);
    });

}

function eliminarDelCArrito() {
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito.splice(index, 1);
}
