let juegos = ['Zelta','Mario Bross','Metroid','Chrono Tigger'];
console.log('largo:', juegos.length)


let primero = juegos[2-2];
let ultimo= juegos[juegos.length-1];

console.log(primero,ultimo);
console.log({primero,ultimo});


let nuevaLongitud = juegos.push('F-Zero','Linterna Verde','Batman','Hulk');//.push agrega un nuevo elemento al arreglo,
//este elemento se agrega en la ultima posicion
console.log({nuevaLongitud,juegos}); 


nuevaLongitud = juegos.unshift('Bomber Man');//.unshift agrega un nuevo elemento al arreglo,
//este elemento se agrega al principio o primera posicion
console.log({nuevaLongitud,juegos});

// let juegoBorrado = juegos.pop();
// console.log({juegoBorrado,juegos})//.pop elimina el ultimo elemento del arreglo


let pos = 1;
console.log(juegos)
let juegosBorrados = juegos.splice(pos,2);// en este punto se elimina la cantidad indicada
// desde el indicice indicado

console.log({juegosBorrados,juegos});


let metroidIndex = juegos.indexOf('Metroid');
console.log({metroidIndex});

metroidIndex = juegos.indexOf('metroid')//cuando se busca el elemento de manera erronea
// o mal escrita devuelve el valor no encontrado como -1 y recordar tambien que es caseSensitive
console.log({metroidIndex});


metroidIndex = juegos.indexOf('Bomber Man');
console.log({metroidIndex});
document.write([juegos])
