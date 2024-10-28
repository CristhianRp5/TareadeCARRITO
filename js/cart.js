const contenedorTarjetas = document.getElementById("productos-container")




function TarjetasInicio(){
    const productos= JSON.parse(localStorage.getItem("productos"))
    console.log(productos);
    if(productos&& productos.length>0){
    
    productos.forEach(producto => {
        const nuevoProducto= document.createElement("div");
        nuevoProducto.classList= "tarjeta-producto"; 
        nuevoProducto.innerHTML=`
            <img src="Imagenes/1${producto.id}.png">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
            <div>
                <button>-</button>
                <span class="Cantidad">0</span>
                <button>+</button>
            </div>

             `               
            contenedorTarjetas.appendChild(nuevoProducto)
            nuevoProducto.
            getElementsByTagName("button")[1]
            .addEventListener("click", ()=> agregarAlcarrito(producto))

            contenedorTarjetas.appendChild(nuevoProducto)
            nuevoProducto.getElementsByTagName("button")[0]
            .addEventListener("click", ()=> {
                RestarAlcarrito(producto)
                TarjetasInicio();
            });
                       
        });
    }
}

TarjetasInicio();