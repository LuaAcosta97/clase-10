
const productosArray = [
    // Abrigos
    {
        id: "abrigo-01",
        titulo: "abrigo 01",
        imagen: "https://acdn.mitiendanube.com/stores/001/317/859/products/camp-iris311-a08c07bd565dfc1e8916811430148579-1024-1024.webp",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-02",
        titulo: "abrigo 02",
        imagen: "https://acdn.mitiendanube.com/stores/001/317/859/products/whatsapp-image-2023-04-14-at-12-40-15-21-16928400bd1e67850516814868914238-1024-1024.webp",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-03",
        titulo: "abrigo 03",
        imagen: "https://acdn.mitiendanube.com/stores/001/317/859/products/whatsapp-image-2023-04-18-at-15-26-53-11-1a2475b4e7b3915e2116818425629941-1024-1024.webp",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-04",
        titulo: "abrigo 04",
        imagen: "https://acdn.mitiendanube.com/stores/001/317/859/products/whatsapp-image-2023-04-19-at-19-07-131-d4e929b6acfbcc9e5916819421875056-1024-1024.webp",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-05",
        titulo: "abrigo 05",
        imagen: "https://acdn.mitiendanube.com/stores/001/317/859/products/tapado-regina1-41074d775e5d8d692216851233232289-1024-1024.webp",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    // camisas
    {
        id: "camisa-01",
        titulo: "camisa 01",
        imagen: "https://acdn.mitiendanube.com/stores/001/317/859/products/cam-flow411-41bc4dc42b8d15e62516936029055335-1024-1024.webp",
        categoria: {
            nombre: "Camisas",
            id: "camisas"
        },
        precio: 1000
    },
    {
        id: "camisa-02",
        titulo: "camisa 02",
        imagen: "https://acdn.mitiendanube.com/stores/001/317/859/products/camamour1-36d6259d1d8d59fa6816795231016190-1024-1024.webp",
        categoria: {
            nombre: "Camisas",
            id: "camisas"
        },
        precio: 1000
    },
    {
        id: "camisa-03",
        titulo: "camisa 03",
        imagen: "https://acdn.mitiendanube.com/stores/001/317/859/products/cam-let-it-be21-1bb97b541fe7cf9dfe16957434708234-1024-1024.webp",
        categoria: {
            nombre: "Camisas",
            id: "camisas"
        },
        precio: 1000
    },
    {
        id: "camisa-04",
        titulo: "camisa 04",
        imagen: "https://acdn.mitiendanube.com/stores/001/317/859/products/028a35221-124de9def1885a3d5616496962980921-1024-1024.webp",
        categoria: {
            nombre: "Camisas",
            id: "camisas"
        },
        precio: 1000
    },

     {
        id: "camisa-05",
        titulo: "camisa 05",
        imagen: "https://acdn.mitiendanube.com/stores/001/317/859/products/aloe21-5d4d83b4d3a86775d216782908832420-1024-1024.webp",
        categoria: {
            nombre: "Camisas",
            id: "camisas"
        },
        precio: 1000
    },{
        id: "camisa-06",
        titulo: "camisa 06",
        imagen: "https://acdn.mitiendanube.com/stores/001/317/859/products/cam-zule1-c5c514c3d2e318003016929929076096-1024-1024.webp",
        categoria: {
            nombre: "Camisas",
            id: "camisas"
        },
        precio: 1000
    },
    {
        id: "camisola-07",
        titulo: "camisa07",
        imagen: "https://acdn.mitiendanube.com/stores/001/053/068/products/praga-ecc6906711774196ee169807002529981-78a23f3d9b972e35c516980700505720-1024-1024.webp",
        categoria: {
            nombre: "Camisas",
            id: "camisas"
        },
        precio: 1000
    },
    {
        id: "camisa-08",
        titulo: "camisa 08",
        imagen: "https://acdn.mitiendanube.com/stores/001/317/859/products/0a011-009-31-62dbff81c1e9a933a516639568020746-1024-1024.webp",
        categoria: {
            nombre: "Camisas",
            id: "camisas"
        },
        precio: 1000
    },
    // pantalones
    {
        id: "pantalones-01",
        titulo: "pantalones 01",
        imagen: "https://acdn.mitiendanube.com/stores/001/317/859/products/harold1-41c8081708f4fed72716782238059527-1024-1024.webp",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalones-02",
        titulo: "pantalones 02",
        imagen: "https://acdn.mitiendanube.com/stores/001/317/859/products/whatsapp-image-2023-04-18-at-15-14-12-21-1ac4d10aa6a4fc168616818419262263-1024-1024.webp",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalones-03",
        titulo: "pantalones 03",
        imagen: "https://acdn.mitiendanube.com/stores/001/317/859/products/jean-pink-0n601-020-011-579c532fd872705b2616656280214419-1024-1024.webp",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalones-04",
        titulo: "pantalones 04",
        imagen: "https://acdn.mitiendanube.com/stores/001/317/859/products/grey21-b9d2d3d5a25fd4c6d416788206559900-1024-1024.webp",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalones-05",
        titulo: "pantalones 05",
        imagen: "https://acdn.mitiendanube.com/stores/001/317/859/products/cargonoel41-ffcb6ab52515b8a1b416820982700654-1024-1024.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    }
   
];


const contenedorProductos = document.getElementById("contenedor-productos");
const botonesCategorias = document.querySelectorAll("contenedor-productos");

function cargarProductos() {

    productosArray.forEach(producto => { 

    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
                <img class="imagen-producto" src="${producto.imagen}" alt="${producto.titulo}">
                 <div class="detalles">
                        <h3 class="titulo-producto">${producto.titulo}</h3>
                        <p class="producto-precio">$${producto.precio}</p>
                        <button class="prducto-agregar" id="${producto.id}">agregar </button>
                 </div> 
    `
contenedorProductos.append(div);
    })
};

cargarProductos(productosArray);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) =>{

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        
        e.currentTarget.classList.add("active");

        const productosBoton = productos.filter(producto => producto.categoria) 

        cargarProductos(productosArray);

    })
});
