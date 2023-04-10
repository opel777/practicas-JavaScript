let personaje = {
    nombre: 'Tony Stark',
    codename: 'Ironman',
    vivo: 'false',
    edad: 40,
    coords: {
        lat: 34.034,
        long: -118.70
    },
    trajes:['Mark I','Mark V','Hulkbuster'],
    direccion:{
        zip:'10880. 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula':'Infinity War',
}; 
const x = 'vivo';
console.log(personaje);
console.log('Nombre:',personaje.nombre);
console.log('Nombre:',personaje['nombre']);
console.log('Edad:', personaje.edad);
console.log('Coors',personaje.coords);
console.log('Lat:',personaje.coords.lat);
console.log('Lat:',personaje.coords.long);
console.log('Cantidad de trajes:',personaje.trajes.length);
console.log('Ultimo traje:',personaje.trajes[personaje.trajes.length-1]);
console.log('Vivo:',personaje.vivo);
console.log('Vivo:',personaje[x]);
console.log('Ultima Pelicula:',personaje["ultima-pelicula"])



//Mas detalles

delete personaje.edad;
console.log(personaje)

personaje.casado = true;

console.log(personaje);

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// personaje = true;
Object.freeze(personaje);
personaje.dinero = 'buba';

// personaje.direccion.ubicacion = 'Costa Rica'
Object.freeze(personaje.direccion )
personaje.direccion.ubicacion = 'Costa Rica'
console.log(personaje)


const propiedades = Object.getOwnPropertyNames(personaje);
console.log(propiedades)
const valores = Object.values(personaje)
console.log(valores)