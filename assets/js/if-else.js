let a = 5;

if (a >= 10){
    console.log('A es igual o mayor a 10')
}else{
    console.log('A es menor a 10');
}

console.log('Fin del programa')

const hoy = new Date();
let dia = hoy.getDay();
dia = 3
console.log ({dia})


if(dia === 1){
    console.log('Es Lunes');
}else if(dia === 0){
    console.log('Es Domingo')
}else if (dia === 2){
    console.log('Martes')
}else{
    console.log('No es lunes o martes o Domingo')
}

const diasLetras = {
    0:'Domingoo',
    1:'Luness',
    2:'Martess',
    3:'Miercoless',
    4:'Juevess',
    5:'vierness',
    6:'Sabadoo'
}

const diasLetras2 = ['Domingo','Lunes','Martes','Miercoles','Jueves','viernes','Sabado'];
console.log(diasLetras[dia])