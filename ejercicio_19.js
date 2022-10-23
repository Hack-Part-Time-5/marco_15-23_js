/* Crear un programa que dadas 2 variables booleanas,
“buen_tiempo” y “trabajo”, nos diga si puedo ir a la playa.
Si trabajo, no puedo ir, si no trabajo verifico que haga
buen tiempo. En los casos negativos imprimir un mensaje
adecuado. */


let trabajo = prompt('Trabajas hoy?')

if (trabajo == 'no') {
    let buen_tiempo = prompt('Hace buen tiempo hoy?')
    if (buen_tiempo == 'si'){
        alert('Perfecto, podemos ir a la playa')
    }
}else {
    alert('Lo siento, no podemos ir a la playa')
}