const contenedorTarjetas = document.getElementById("productos-container")
const unidadesElement= document.getElementById("unidades")
const precioElement= document.getElementById("precio")




function TarjetasInicio(){
    contenedorTarjetas.innerHTML="";
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
                <span class="Cantidad">${producto.cantidad}</span>
                <button>+</button>
            </div>

             `;               
            contenedorTarjetas.appendChild(nuevoProducto);
            nuevoProducto
            .getElementsByTagName("button")[1]
            .addEventListener("click", (e)=> {
                const cuentaElement= e.target.parentElement.getElementsByTagName("span")[0];
                cuentaElement.innerText = agregarAlcarrito(producto);
                ActualizarTotales();
            });

            
        nuevoProducto
            .getElementsByTagName("button")[0]
            .addEventListener("click", (e)=> {
                RestarAlcarrito(producto);
                TarjetasInicio();
                ActualizarTotales();
                 
            });              
    });
   }
}


TarjetasInicio();
ActualizarTotales();


function ActualizarTotales(){
    const productos = JSON.parse(localStorage.getItem("productos"));
    let unidades =0;
    let precio=0;
    if(productos&& productos.length>0){ 
        productos.forEach(producto=>{
            unidades+= producto.cantidad;
            precio+= producto.precio* producto.cantidad;
    })
    unidadesElement.innerText = unidades;
    precioElement.innerText = precio;
}
    
    
}