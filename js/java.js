const contenedorTarjetas = document.getElementById("productos-container")




function TarjetasInicio(productos){
    productos.forEach(producto => {
        const nuevoProducto= document.createElement("div");
        nuevoProducto.classList= "tarjeta-producto"; 
        nuevoProducto.innerHTML=`
            <img src="Imagenes/1${producto.id}.png">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
            <button> Agregar al carrito de compras</button>
             `               
            contenedorTarjetas.appendChild(nuevoProducto)
            nuevoProducto.getElementsByTagName("button")[0].addEventListener("click", ()=> agregarAlcarrito(producto))


        
    });
}

TarjetasInicio(productos)