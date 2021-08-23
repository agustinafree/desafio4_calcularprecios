// Calcular el valor de dos productos

let precioProducto1 = parseInt(prompt("Ingresar el precio del producto 1: "));
let precioProducto2 = parseInt(prompt("Ingresar el precio del producto 2: "));

function ingresarProductos(producto1, producto2) {
    let result = (producto1 + producto2)
    return result
}

let total = ingresarProductos(precioProducto1, precioProducto2);
alert("El total de los productos es " + total)
// Calcular precio en cuotas 
function calcularCuotas (producto1, producto2) {

    let totalValue = ingresarProductos(precioProducto1, precioProducto2)
    alert('Procedemos a cobrar ' + totalValue);
    
    let respuesta = prompt('Queres pagar en Cuotas?', 'Ingresa "si" o "no"').toLowerCase();
    
    while ( typeof respuesta !== 'string' && (respuesta != 'si' || respuesta != 'no')) {
        respuesta = prompt('Invalido. Ingresa tu respuesta correctamente:').toLowerCase();
    }
    
    if (respuesta === 'si') {
        let cantCuotas = prompt('Ingrese Cantidad de cuotas: ', '3, 6 o 12');
        while (isNaN(cantCuotas) || cantCuotas % 3 != 0 || cantCuotas > 12 || cantCuotas < 3) {
            cantCuotas = prompt('Intente nuevamente: ', '3, 6 o 12');
        }
        let preciototal = ingresarProductos(precioProducto1, precioProducto1) / cantCuotas ;
        alert('Usted eligio ' + cantCuotas + ' cuotas.' + ' Su Precio por Cuota sera de: ' + Math.trunc( preciototal + cantCuotas ));
    } else {
        alert('Su respuesta fue "' + respuesta + '". paga en efectivo');
    }
}
calcularCuotas();
