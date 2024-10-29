function agregarAlcarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("productos"));
    console.log(memoria);
    let cuenta=0;

    if(!memoria){
        const nuevoProducto = getNuevoProductoParaMemoria(producto);
        localStorage.setItem("productos",JSON.stringify([nuevoProducto]));
        cuenta=1;
    } else{
        const inidiceProducto= memoria.findIndex(producto => producto.id === producto.id)
        console.log(inidiceProducto);
        const nuevaMemoria= memoria;
        if(inidiceProducto=== -1){
            nuevaMemoria.push(getNuevoProductoParaMemoria(producto));
            cuenta=1;
        }else{
            nuevaMemoria[inidiceProducto].cantidad++;
            cuenta=nuevaMemoria[inidiceProducto].cantidad;
        }
        localStorage.setItem("productos",JSON.stringify(nuevaMemoria)); 
          
    }
    actualiarNumeroCarrito();
    return cuenta;
}

function RestarAlcarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("productos"));
    const inidiceProducto= memoria.findIndex(producto => producto.id === producto.id)
    if(memoria[inidiceProducto].cantidad===1){
        memoria.splice(inidiceProducto,1);

    } else{
        memoria[inidiceProducto].cantidad--;
    }
    localStorage.setItem("productos",JSON.stringify(memoria));
    actualiarNumeroCarrito();
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