let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTLM = document.querySelector(elemento); 
    elementoHTLM.innerHTML = texto;
    return;
}

function verificarIntento(){
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto){
    asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`); 
    document.getElementById('reiniciar').removeAttribute('disabled');
   } else{
        //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
   }
   return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumerosSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo ){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else{
        //si el numero generado esta incluido en la lista
         if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumerosSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}!`);
    numeroSecreto = generarNumerosSecreto();
    intentos = 1;
} 

function reiniciarJuego(){
    //Limpiar la caja.
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el número aleatorio
    //Inicializar el número intentos   
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();