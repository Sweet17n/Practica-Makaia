function evaluarOperario() {
    // Solicitar los datos al usuario
    let sueldo = prompt("Ingrese el sueldo del operario (en USD):");
    let antiguedad = prompt("Ingrese los años de antigüedad del operario:");

    // Convertir los valores ingresados a numeros
    sueldo = Number(sueldo);
    antiguedad = Number(antiguedad);

    // Realizar las comparaciones y mostrar los resultados, en consola
    console.log("¿El sueldo es inferior a $2000 US y la antigüedad es igual o superior a 10 años?:", sueldo < 2000 && antiguedad >= 10);
    console.log("¿El sueldo es inferior a $2000 US o la antigüedad es menor a 10 años?:", sueldo < 2000 || antiguedad < 10);
    console.log("¿El sueldo es mayor o igual a $2000 US?:", sueldo >= 2000);
}

evaluarOperario();

