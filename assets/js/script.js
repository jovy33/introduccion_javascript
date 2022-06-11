function calcular() {

    /* Obtener elementos cantidad y precio */
    eleCantidad = document.querySelector(".cantidad")
    elePrecio = document.querySelector("#precio")

    /* Obtener valor de los elementos Cantidad y Precio*/
    cantidad = eleCantidad.value
    precio = Number(elePrecio.innerHTML)
    
    /* Realizar operacion para obtener total */
    resultado = precio * cantidad

    /* Asignar resultado al span total */
    eleTotal = document.querySelector("#total")
    eleTotal.innerHTML = resultado

    
    /* Asignar cantidad al spanCantidad */
    eleSpanCantidad = document.querySelector("#spanCantidad")
    eleSpanCantidad.innerHTML = cantidad


    /* Asignar color al div color */
    eleSelectColor = document.querySelector("#selectorColor")
    eleColor = document.querySelector("#color")
    eleColor.style.backgroundColor = eleSelectColor.value
    
}