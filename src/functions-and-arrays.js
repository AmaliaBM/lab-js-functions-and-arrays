// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    let max;
    if (number1 > number2) {
        max = number1;
    } else if (number2 > number1) {
        max = number2;
    } else {
        max = number1;
    }

    return max;
    }

    console.log( maxOfTwoNumbers(2, 10) );
    console.log( maxOfTwoNumbers(10, 2) );



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayDePalabras) {
    if (arrayDePalabras.length === 0){
        return null;
    }
    let palabraMasLarga = ""
    palabraMasLarga = arrayDePalabras[0];

    for (let i=0; i < arrayDePalabras.length; i++){
        if (arrayDePalabras[i].length > palabraMasLarga.length) {
            palabraMasLarga = arrayDePalabras[i];
        } 
    }
    return palabraMasLarga;
}

console.log (findLongestWord(words)); 


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayDeNumeros) {
    let sumaDeNumeros = 0
    
    for (let i=0; i < arrayDeNumeros.length; i++){
        sumaDeNumeros = sumaDeNumeros + arrayDeNumeros[i]  
    }
    
    return sumaDeNumeros;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayDeNumeros2) {
    if (arrayDeNumeros2.length === 0){
        return 0;
    }
    const sumaDeNumeros = sumNumbers(arrayDeNumeros2);
    return sumaDeNumeros / arrayDeNumeros2.length; 
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arraydePalabras2, palabraAbuscar) {
    if (arraydePalabras2.length === 0){
        return null;
    }
    for (let i = 0; i < arraydePalabras2.length; i++) {
        if (arraydePalabras2[i] === palabraAbuscar) {
            return true;
        }
    }
    return false;
}
   
