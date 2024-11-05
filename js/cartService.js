function agregarAlcarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("productos")) || [];
    let cuenta = 0;

    const indiceProducto = memoria.findIndex(memoriaProducto => memoriaProducto.id === producto.id);

    if (indiceProducto === -1) {
        memoria.push(getNuevoProductoParaMemoria(producto));
        cuenta = 1;
    } else {
        memoria[indiceProducto].cantidad++;
        cuenta = memoria[indiceProducto].cantidad;
    }

    localStorage.setItem("productos", JSON.stringify(memoria));
    actualizarNumeroCarrito();
    return cuenta;
}

function RestarAlcarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("productos")) || [];
    const indiceProducto = memoria.findIndex(memoriaProducto => memoriaProducto.id === producto.id);

    if (indiceProducto !== -1) {
        if (memoria[indiceProducto].cantidad === 1) {
            memoria.splice(indiceProducto, 1);
        } else {
            memoria[indiceProducto].cantidad--;
        }
        localStorage.setItem("productos", JSON.stringify(memoria));
        actualizarNumeroCarrito();
    }
}

function actualizarNumeroCarrito() {
    const memoria = JSON.parse(localStorage.getItem("productos")) || [];
    const cuenta = memoria.reduce((acum, current) => acum + current.cantidad, 0);
    cuentaCarritoElement.innerText = cuenta;
}

function getNuevoProductoParaMemoria(producto) {
    return { ...producto, cantidad: 1 };
}

const cuentaCarritoElement = document.getElementById("cuenta-carrito");
