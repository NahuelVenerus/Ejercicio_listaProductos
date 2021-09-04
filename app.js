const listaDeProductos = [
    {nombre:"Tomates", precio: 100},
    {nombre:"Leche", precio: 30},    
    {nombre:"Helado", precio: 250},
    {nombre:"Hamburguesa", precio: 1000},
    {nombre:"Prepizza", precio: 300},   
]

function filtrarProductos(monto){
    const filtrados = listaDeProductos.filter(element => element.precio < monto)
    filtrados.forEach(producto => {
        const elemento = document.createElement('P')
        elemento.innerText = producto.nombre
        document.getElementById("listaDeProductos").appendChild(elemento)
    })
}

function ordenarPorNombre(){
    listaDeProductos.sort(function(producto1, producto2){
        return producto1.nombre.localeCompare(producto2.nombre)
    })
    listaDeProductos.forEach(producto => {
        const elemento = document.createElement('P')
        elemento.innerText = producto.nombre
        document.getElementById("listaDeProductos").appendChild(elemento)
    })
}

function ordenarPorPrecio(){
    listaDeProductos.sort(function(producto1, producto2){
        return producto2.precio - producto1.precio
    })
    listaDeProductos.forEach(producto => {
        const elemento = document.createElement('P')
        elemento.innerText = producto.nombre
        document.getElementById("listaDeProductos").appendChild(elemento)
    })
}