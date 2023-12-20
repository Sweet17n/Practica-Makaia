function esVocal() {
    let letra = prompt("Ingrese una letra:");
    
    // Asegurarse de que la entrada es una sola letra
    let esUnaLetra = letra.length === 1;
    letra = letra.toLowerCase();

    // Mostrar directamente el resultado de la operación lógica
    alert("¿La letra es una vocal?: " + (esUnaLetra && ('aeiou'.includes(letra))));
}

esVocal();
