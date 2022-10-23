/* Crear un programa que dada una variable number, nos
diga si es un múltiplo de 3. Si no lo es, nos diga si es
múltiplo de 8 y, si no, imprima un mensaje de error. */

let num = Number(prompt('Escribe un numero para saber si es multiplo de 3 o de 8: '));

if (num % 3 == 0){
    alert('Tu numero es multiplo de 3!')
}else if (num % 8 ==0) {
    alert('Tu numero es multiplo de 8!')
}else{
    alert('Error!!, este numero no es multiplo ni de 3 ni tampoco de 8')
}