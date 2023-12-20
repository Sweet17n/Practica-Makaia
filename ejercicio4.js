function calcularSalarioYSubsidio() {
    let nombreEmpleado = prompt("Ingrese el nombre del empleado:");
    let salarioPorHora = prompt("Ingrese el salario por hora del empleado (en COP):");
    let horasTrabajadas = prompt("Ingrese el número de horas trabajadas en el mes:");

    salarioPorHora = Number(salarioPorHora);
    horasTrabajadas = Number(horasTrabajadas);

    let salarioMensual = salarioPorHora * horasTrabajadas;

    // Mostrar la información sin usar estructuras condicionales
    console.log("Nombre del Empleado:", nombreEmpleado);
    console.log("Salario Básico Mensual:", salarioMensual, "COP");
    console.log("¿Recibe Subsidio de Transporte?:", salarioMensual <= 700000);
}

calcularSalarioYSubsidio();


