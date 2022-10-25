// Crear un programa que calcule la suma de los primeros “n” números, donde el valor de n, se recibe desde el “prompt”

let num = Number(prompt('Ingresa un numero para verlo la suma de todos sus numeros'));

let suma = 0

for(let i = 1; i <= num; i++) {
    console.log(suma)
    suma = suma + i
}
console.log(`la resultado de la suma de todos los numeros de ${num} es: ${suma}`);


