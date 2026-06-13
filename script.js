function calculo() {
    let tipoOperacion;
    let cantNum = parseInt(prompt("Ingrese la cantidad de números que usted quiere en su operación"))
    if (cantNum > 2) {
        tipoOperacion = parseInt(prompt("Como es un cálculo de más de dos números, ingrese 1 para Suma/Resta, o 2 para Multiplicación/División"));
    }
    else if (cantNum == 2) {
        tipoOperacion = 3;
    }
    else {
        console.log("Algo salió mal")
        return;
    }

    
    const numeros = [];
    const operaciones = [];
    let resultado;
    let a = 0;
    let aAnterior = 0;
    for (let i = 0; i < cantNum; i++) {
        a = aAnterior;
        numeros[i] = parseFloat(prompt("Escribe el número número " + [i + 1] + " de tu operación matemática"));
        while (Number.isNaN(numeros[i])) {
            alert("Solo se pueden ingresar valores numéricos. Intentelo de nuevo a continuación")
            numeros[i] = parseFloat(prompt("Escribe el número número " + [i + 1] + " de tu operación matemática"));
        }
        while (a + 1 != cantNum) {
            operaciones[a] = prompt("Escribe el tipo de operación: + - * /");
            while (operaciones[a] !== "+" && operaciones[a] !== "-" && operaciones[a] !== "*" && operaciones[a] !== "/") {
                alert("Solo se pueden usar los operadores + - * /. Intentelo de nuevo a continuación")
                operaciones[a] = prompt("Escribe el tipo de operación: + - * /");
            }
            a++;
            aAnterior = a;
            a = cantNum - 1;
        }
    }

    resultado = numeros[0];
    let u = numeros.length;
    for (let n = 1; n != u; n++) {
        if (tipoOperacion == 1) {
            if (operaciones[n-1] == "+") {
                resultado = resultado + numeros[n];
            }
            else if (operaciones[n-1] == "-") {
                resultado = resultado - numeros[n];
            }
            else {
                alert("Algo salió mal");
                return;
            }
        }
        else if (tipoOperacion == 2) {
            if (operaciones[n-1] == "*") {
                resultado = resultado * numeros[n];
            }
            else if (operaciones[n-1] == "/") {
                resultado = resultado / numeros[n];
            }
            else {
                alert("Algo salió mal");
                return;
            }
        }
        else if (tipoOperacion == 3) {
            if (operaciones[n-1] == "+") {
                resultado = resultado + numeros[n];
            }
            else if (operaciones[n-1] == "-") {
                resultado = resultado - numeros[n];
            }
            else if (operaciones[n-1] == "*") {
                resultado = resultado * numeros[n];
            }
            else if (operaciones[n-1] == "/") {
                resultado = resultado / numeros[n];
            }
            else {
                alert("Algo salió mal");
                return;
            }
        }   
    }
    alert("El resultado de la operación es: " + resultado);
    console.log("¡Gracias por probar la calculadora!")
}