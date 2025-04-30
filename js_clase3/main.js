
// EJERCICIO 1 DIAPOSITIVAS
function convierteString (num){
    if (typeof num === "number") {
        // Convertir el número a string
    return num.toString();

    } else {
    return "debo ser ejecutada con un numero";
    }
}
console.log(convierteString(123)); // "123"


// EJERCICO 2 DIAPOSITVAS


    

function esPAR (numPar) {
    if (numPar % 2 === 0) {
        return true; // Es par
    }
    else {
        return false; // Es impar
    }
}

console.log(esPAR(4)); // true  