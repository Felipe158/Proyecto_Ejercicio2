const readlineSync = require('readline-sync');
const { generarNumeroAleatorio, verificarAdivinanza } = require('./adivinanza');

const obtenerNumeroUsuario = () => {
    return readlineSync.question('Ingrese un numero: ');
};

const juegoAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    //console.log(numeroSecreto);
    let numeroAdivinado = 0.0;

    console.log('¡Bienvenido a Adivina el numero secreto!');
    console.log('Intenta adivinar el n umero del 1 al 100. \n');

    while (numeroAdivinado != numeroSecreto) {
        numeroAdivinado = obtenerNumeroUsuario();
        //console.log(numeroAdivinado);
        verificarAdivinanza(numeroSecreto, numeroAdivinado);
    }
};

juegoAdivinanza();
