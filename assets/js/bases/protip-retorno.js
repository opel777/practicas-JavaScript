// function crarPersona(nombre,apellido){
//     return{
//         nombre: nombre,
//         apellido:apellido
//     }
// }

// Nota: esta funcion se puede simplicar deduciendo el nombre de los argumentos,
// solo si estos llevan el mismo nombre como por ejemplo:

// function crarPersona(nombre,apellido){
//     return{
//        nombre,
//        apellido
//     }
// }


// -------------------------------------------------
// creando esta funcion como arrow function
//  const crarPersona =  (nombre,apellido) => {nombre,apellido} esto retorna undefine
const crarPersona =  (nombre,apellido) => ({nombre,apellido}) //ingresando las llaves podemos
                                                              // mostrar todas las propiedades
const persona = crarPersona('Gustavo','Villegas');

console.log(persona)


// -------------------------------------------------------

function imprimeArgumentos(){
    console.log(arguments);//propiedad arguments
}
imprimeArgumentos(10, true, false, 'Gustavo', 'Hola');



//---------------------------------------------------


// const imprimeArgumentos2 = (arguments)=>{
//     console.log(arguments)// de esta manera solo retorna el primer argumento
// }
// imprimeArgumentos2(11, true, false, 'Antonio', 'Pepe');


//----------------------------------------------------


// const imprimeArgumentos3 = (...arg)=>{
//     console.log(arg)
// }
// imprimeArgumentos3(13, true, false, 'Maria', 'jose');


const imprimeArgumentos4 = (edad,...args)=>{
    // console.log({edad,args})
    return args;
    
}
const [casado, vivo, nombre, saludo]=imprimeArgumentos4(15, true, false, 'Manuel', 'hola');
console.log({casado, vivo, nombre, saludo});



//----------------------------------------

const {nombre:nuevoNombre,apellido:nuevoApellido} = crarPersona('Fernado','Herrera');
console.log({nuevoNombre,nuevoApellido})


const Tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: 'false',
    edad: 40,
    trajes:['Mark I','Mark V','Hulkbuster']
};

const imprimePropiedades =(personaje) =>{
    console.log(personaje.nombre);
    console.log(personaje.codeName);
    console.log(personaje.vivo);
    console.log(personaje.edad);
    console.log(personaje.trajes);
}
imprimePropiedades(Tony)

const imprimePropiedades2 =(personaje) =>{
    console.log('nombre:',personaje.nombre);
    console.log('codeName:',personaje.codeName);
    console.log('vivo:',personaje.vivo);
    console.log('edad:',personaje.edad);
    console.log('trajes:',personaje.trajes);
}
imprimePropiedades2(Tony)

const imprimePropiedades3 =({nombre,codeName,vivo,edad = 12,trajes}) =>{
    //edad = edad || 0;
   console.log({nombre});
   console.log({codeName});
   console.log({vivo});
   console.log({edad});
   console.log({trajes});
}
imprimePropiedades3(Tony)
