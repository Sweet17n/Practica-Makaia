function Descuento() {
    let valorCompra = prompt("Ingrese el valor de la compra (en COP):");
    valorCompra = Number(valorCompra);

    // Mostrar directamente el resultado de la operación lógica
    console.log("¿Califica para el descuento del 50%?:", valorCompra >= 100000);
}

Descuento();
