function calculo() {
    let tipoOperacion;
    let cantNum = parseInt(prompt("Ingrese la cantidad de números que usted quiere en su operación"))
    if (cantNum > 2) {
        tipoOperacion = parseInt(prompt("Como es un cálculo de más de dos números, ingrese 1 para Suma/Resta, o 2 para Multiplicación/División"));
    }
    else {
        tipoOperacion = 3;
    }
    
    const numeros = [];
    const operaciones = [];
    let resultado;
    let a = 0;
    let aAnterior = 0;
    for (let i = 0; i < cantNum; i++) {
        a = aAnterior;
        numeros[i] = parseFloat(prompt("Escribe el número número " + [i + 1] + " de tu operación matemática"));
        while (a + 1 != cantNum) {
            operaciones[a] = parseInt(prompt("Escribe el tipo de operación: 1. Suma, 2. Resta, 3. Multiplicación, 4. División"));
            a++;
            aAnterior = a;
            a = cantNum - 1;
        }
    }

    resultado = numeros[0];
    let u = numeros.length;
    for (let n = 1; n != u; n++) {
        if (tipoOperacion == 1) {
            if (operaciones[n-1] == 1) {
                resultado = resultado + numeros[n];
            }
            else if (operaciones[n-1] == 2) {
                resultado = resultado - numeros[n];
            }
            else {
                alert("Algo salió mal");
            }
        }
        else if (tipoOperacion == 2) {
            if (operaciones[n-1] == 3) {
                resultado = resultado * numeros[n];
            }
            else if (operaciones[n-1] == 4) {
                resultado = resultado / numeros[n];
            }
            else {
                alert("Algo salió mal");
            }
        }
        else if (tipoOperacion == 3) {
            if (operaciones[n-1] == 1) {
                resultado = resultado + numeros[n];
            }
            else if (operaciones[n-1] == 2) {
                resultado = resultado - numeros[n];
            }
            else if (operaciones[n-1] == 3) {
                resultado = resultado * numeros[n];
            }
            else if (operaciones[n-1] == 4) {
                resultado = resultado / numeros[n];
            }
            else {
                alert("Algo salió mal");
            }
        }   
    }
    alert("El resultado de la operación es: " + resultado);
    console.log("¡Gracias por probar la calculadora!")
}