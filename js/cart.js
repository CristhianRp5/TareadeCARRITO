const contenedorTarjetas = document.getElementById("productos-container");
const unidadesElement = document.getElementById("unidades");
const precioElement = document.getElementById("precio");
const botonComprar = document.querySelector("#totales button:first-of-type");
const botonReiniciar = document.querySelector("#totales button:last-of-type");

function TarjetasInicio() {
    contenedorTarjetas.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem("productos")) || [];
    
    if (productos.length > 0) {
        productos.forEach(producto => {
            const nuevoProducto = document.createElement("div");
            nuevoProducto.classList = "tarjeta-producto";
            nuevoProducto.innerHTML = `
                <img src="Imagenes/1${producto.id}.png">
                <h3>${producto.nombre}</h3>
                <p>$${producto.precio}</p>
                <div>
                    <button>-</button>
                    <span class="Cantidad">${producto.cantidad}</span>
                    <button>+</button>
                </div>
            `;

            contenedorTarjetas.appendChild(nuevoProducto);

            // Event listener para aumentar cantidad
            nuevoProducto.getElementsByTagName("button")[1].addEventListener("click", () => {
                agregarAlcarrito(producto);
                TarjetasInicio();
                ActualizarTotales();
            });

            // Event listener para reducir cantidad
            nuevoProducto.getElementsByTagName("button")[0].addEventListener("click", () => {
                RestarAlcarrito(producto);
                TarjetasInicio();
                ActualizarTotales();
            });
        });
        botonComprar.disabled = false;
    } else {
        botonComprar.disabled = true;
    }
}

function ActualizarTotales() {
    const productos = JSON.parse(localStorage.getItem("productos")) || [];
    let unidades = 0;
    let precio = 0;

    productos.forEach(producto => {
        unidades += producto.cantidad;
        precio += producto.precio * producto.cantidad;
    });

    unidadesElement.innerText = unidades;
    precioElement.innerText = `$${precio}`;
}

// Función para procesar la compra
function comprarProductos() {
    const productos = JSON.parse(localStorage.getItem("productos")) || [];
    
    if (productos.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    // Crear mensaje de compra
    let mensaje = "Has comprado:\n";
    let totalPrecio = 0;

    productos.forEach(producto => {
        mensaje += `- ${producto.nombre} x${producto.cantidad} = $${producto.precio * producto.cantidad}\n`;
        totalPrecio += producto.precio * producto.cantidad;
    });

    mensaje += `\nTotal a pagar: $${totalPrecio}`;
    
    // Mostrar mensaje al usuario
    alert(mensaje);

    // Reiniciar carrito después de comprar
    localStorage.removeItem("productos");
    TarjetasInicio();
    ActualizarTotales();
}

// Función para reiniciar el carrito sin comprar
function reiniciarCarrito() {
    localStorage.removeItem("productos");
    TarjetasInicio();
    ActualizarTotales();
}

// Agregar eventos a los botones de Comprar y Reiniciar
botonComprar.addEventListener("click", comprarProductos);
botonReiniciar.addEventListener("click", reiniciarCarrito);

// Inicializar la vista
TarjetasInicio();
ActualizarTotales();


