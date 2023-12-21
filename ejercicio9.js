function esTuristaNacional() {
    // Solicitar al usuario que ingrese el primer carácter de su número de pasaporte
    let primerCaracter = prompt("Ingrese el primer dígito de su número de pasaporte:");

    // Determinar si el turista es nacional (primer carácter es 'A')
    // Convertimos el carácter a mayúscula para asegurar que la comparación funcione independientemente de cómo lo ingrese el usuario
    let esNacional = primerCaracter.toUpperCase() === 'A';

    // Mostrar el resultado
    console.log("¿El turista es nacional?:", esNacional);
}

esTuristaNacional();
