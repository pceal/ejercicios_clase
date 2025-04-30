
// ejercicio 1
function separarLetrasMayusculas(palabra) {
    return palabra.toUpperCase().split("").join(" ");
  }
  
  
  let palabra = "ana";
;
  let palabraSeparada = separarLetrasMayusculas(palabra);
  console.log(palabraSeparada); 

  

// ejercio 2
  function contarPalabras(nombre) {
    if (typeof nombre !== 'string' || nombre.trim() === '') {
      return 0; 
    }
    const palabras = nombre.split(' ');
    return palabras.length;
  }
  console.log(contarPalabras("Antonio Alberto Jesús")); 

  // ejercico 3
  function contarLetra(frase, letraABuscar) {
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === letraABuscar) {
            contador++;
        }
    }
    return contador;
}


let frase = "amo a mi perra";
let letraABuscar = "i";
let cantidad = contarLetra(frase, letraABuscar);
console.log(`La letra "${letraABuscar}" aparece ${cantidad} veces en la frase "${frase}".`);

// ejercico 4

function imprimirImpares(numeroInicial) {
    for (let i = numeroInicial; i < numeroInicial + 50; i++) {
      if (i % 2 !== 0) {
        console.log(i);
      }
    }
  }
  
 
  let numeroUsuario = parseInt(prompt("Ingresa un número:"));
  imprimirImpares(numeroUsuario);



