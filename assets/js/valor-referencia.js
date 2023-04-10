

let a = 10;
let b = a;
a = 30;
console.log({a,b}); //todos los primitivos son pasados por valor

let juan = {nombre: 'Juan'};
let ana  = {...juan};//metodo spread operation no es lo mismo que el rest
ana.nombre = 'Ana';

console.log ({juan, ana});//todos los objetos son pasados por referencia



const cambiaNombre=(persona)=>{
    persona.nombre = 'Tony';
    return persona
}
const cambiaNombre2=({...persona})=>{
    persona.nombre = 'Tony';
    return persona
}

let peter = {nombre: 'Peter'};
// let tony  = cambiaNombre(peter);
let tony  = cambiaNombre2(peter);


console.log(peter, tony)


//Arreglos

const frutas = ['Manzana','Pera','Piña'];
// const otrasFrutas = frutas;
//const otrasFrutas = [...frutas];
console.time('slice');//con este metodo podemos ver los tiempos o rendimientos de ejecucion
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');


otrasFrutas.push('Mango');
console.table({frutas,otrasFrutas})

