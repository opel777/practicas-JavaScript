function saludar(){
    console.log('Hola soy yo')
}
saludar()

// ------------------------------------

function saludar1(nombre){
    console.log('hola' + nombre)
}
saludar1(' Gustavo')

// -----------------------------------esta es llamada funciona anonima

const saludar2 = function(nombreApellido){
    console.log('Hola' + nombreApellido)
}
saludar2(' Gustavo Villegas')

//-----------------------------------

const saludar3 = (segundoNombre)=>{
    console.log('cual es tu segundo nombre ' + segundoNombre)

}

saludar3('Mi segundo nombre es Antonio')

const edad = (anoActual,anoNacimiento)=>{
    console.log('mi edad es '+ (anoActual - anoNacimiento))

}
edad(2023,1979)

const adivinarNumero = (numero)=>{
if(numero === numero){
    console.log('tu numero es',numero)
}
    }

adivinarNumero(5)


function getAleatorio(){
    return Math.random();
}


const getAleatorio2 = () => Math.random();

console.log(getAleatorio2())