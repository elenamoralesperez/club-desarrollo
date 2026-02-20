// Crea un HTML con el body que se provee al lado.

// En un documento script.js, define el array productos que se provee al lado .

// Itera sobre el array y muestra los productos en la lista.

// Cada ítem debe tener un botón al lado que, al presionar, salte una alerta que diga: 'Has comprado: [producto]'.

const productos = ["manzana", "leche", "pan", "arroz", "huevos"];

const listaProductos = document.getElementById("listaProductos");

for (let producto of productos) {
    console.log(producto);
    const li = document.createElement("li");
    li.textContent = producto;
    const boton = document.createElement("button");
    boton.textContent = "Comprar";
    boton.addEventListener("click", function() {
        alert("Has comprado: " + producto);
    });
    li.appendChild(boton);
    listaProductos.appendChild(li);
}
