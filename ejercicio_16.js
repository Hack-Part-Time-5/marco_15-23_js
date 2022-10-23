// Crear un programa que dada una variable number nos diga si es positivo o negativo.

let num = Number(prompt('Escribe un numero del -100 al 100'))

if (num > 0) {
    alert('El numero es positivo')
} else if (num == 0){
    alert('El numero es neutro')
} else {
    alert('El numero es negativo')
}