/**
*Dias de la Semana abrimos a las 11am;
*pero los fines de semana abrimos a las 9
*/

// Entra a un sitio web, para consultar si esta abierto hoy..

const dia = 1;//0:domingo... 1:lunes....
const horaActual = 10;

let horaApertura;
let mensaje; // Esta abierto,Esta cerrado, hoy abrimos a las xx

// if( dia === 0 || dia === 6){
//     if([0,6].includes(dia)){
//     console.log('Es fin de Semana');
//     horaApertura = 9
// }else{
//     console.log('Dia de semana')
//         horaApertura = 11;
    
// }
horaApertura = ([0,6].includes(dia)) ? 9 :11

// if ( horaActual >= horaApertura){
//     mensaje = 'Esta Abierto'
// }else{
//     mensaje = `esta Cerrado,hoy abrimos a las ${horaApertura}`
// }

mensaje = (horaActual >= horaApertura) ?'Esta Abierto' : `esta Cerrado,hoy abrimos a las ${horaApertura}`
console.log({horaApertura,mensaje})