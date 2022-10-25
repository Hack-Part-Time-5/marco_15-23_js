/* Crear un programa que calcule el factorial de un número
n, donde el valor de n se recibe desde el “prompt” y
además se verifique si el valor es de tipo number. Si no lo
es, se sale del programa con un mensaje de error. */



// Con ciclo for----------------------------------------------------------


let num = Number(prompt('Escribe un numero para ver su factorial: '))
let resultado = 1;

if (typeof num === 'number' && !Number.isNaN(num)) {
    for(let i = 1; i <= num; i++){
    resultado *= i
    }
}else{
    alert('ERROR!!')
}
alert(`El factorial del numero ${num} es ${resultado}`)





// Con condicional while---------------------------------------------------

// let num = Number(prompt('Escribe un numero para ver su factorial: '))
// let resultado = num;
// while (num > 1) {
//     num--
//     resultado = resultado * num
// }

// console.log(`El factorial del numero introducido es ${resultado}`)

/* Si ingresamos 5 en el prompt, el la primera vuelta con el while num-- pasa a ser 4. Entonces resultado que vale 5 x 4 = 20, 
segunda vuelta, num pasa a valer 3 con num-- y si se multiplica con resultado que vale 20, 20 x 3 = 60,
en la tercera vuelta num pasa a valer 2 y resultado 60, entonces 60 x 2 = 120, 
en la cuarta num vale 1 y ya no cumple la condicion de while que dice que mientras num sea mayor a 1*/




// Con condicional do while------------------------------------------------
// let num = prompt('Escribe un numero para ver su factorial: ');
// let resultado = num;

// do {
//     num--
//     resultado *= num;
// } while (num > 1);

// console.log(`El numero factorial del numero ingresado es ${resultado}`)




