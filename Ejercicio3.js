function esMultiploDeDos() {
    let numero = prompt("Ingrese un número:");
    numero = Number(numero);

    // Mostrar directamente el resultado
    alert("¿El número es múltiplo de 2?: " + (numero % 2 === 0));
}

esMultiploDeDos();
