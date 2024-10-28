function agregarAlcarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("productos"));
    console.log(memoria)

    if(!memoria){
        const nuevoProducto = getNuevoProductoParaMemoria(producto);
        localStorage.setItem("productos",JSON.stringify([nuevoProducto]));
    } else{
        const inidiceProducto= memoria.findIndex(producto => producto.id === producto.id)
        console.log(inidiceProducto);
        const nuevaMemoria= memoria;
        if(inidiceProducto=== -1){
            nuevaMemoria.push(getNuevoProductoParaMemoria(producto))
        }else{
            nuevaMemoria[inidiceProducto].cantidad++;
        }
        localStorage.setItem("productos",JSON.stringify(nuevaMemoria));   
    }
    actualiarNumeroCarrito();
}

function RestarAlcarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("productos"));
    const inidiceProducto= memoria.findIndex(producto => producto.id === producto.id)
    if(memoria[inidiceProducto].cantidad===1){
        memoria.splice(inidiceProducto,1);
        localStorage.setItem("productos",JSON.stringify(memoria));


    }
}

function getNuevoProductoParaMemoria(producto){

    const nuevoProducto=producto;
    nuevoProducto.cantidad=1;
    return nuevoProducto;
}


const cuentaCarritoElement= document.getElementById("cuenta-carrito");
function actualiarNumeroCarrito(){
    const memoria = JSON.parse(localStorage.getItem("productos"))
    const cuenta= memoria.reduce((acum, current) => acum+current.cantidad,0);
    cuentaCarritoElement.innerText=cuenta;


}