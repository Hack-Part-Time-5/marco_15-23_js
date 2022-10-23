/* Crear un programa que reste 5 a los primeros 20 números
(1,2,3,4…20). */


for(let i = 1; i <= 40; i++){
    if(i <= 20){
        let resultado = i -5;
        console.log(`El numero de restarle 5 a ${i} es ${resultado}`)
    }else if (i > 20){
        console.log(`el numero ${i} al ser mayor de 20 no se le suma nada`)
    }
}

