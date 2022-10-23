/* Crear un programa que dadas 2 variables tipo number, las
sume. Si la suma es mayor que 50 multiplique por 2, si no,
por 3. */

let numUno = Number(prompt('Introduce un primer numero a sumar: '));
let numDos = Number(prompt('Introduce el segundo numero a sumar:'));

let resultado = numUno + numDos;

if (resultado > 50) {
    alert(`Al ser tu numero mayor que 50 se multiplica por dos, y este es el resultado: ${resultado * 2}`)   
} else {
    alert(`Al ser tu numero menor que 50 se multiplica por tres, y este es el resultado: ${resultado * 3}`)
}
