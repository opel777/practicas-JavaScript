// const elMayor = (a,b) =>{
//     return (a > b)? a:b;
// }

const elMayor = (a,b) => (a > b) ? a : b;

const tienesMembresia = (miembro) => (miembro)? '2 Dolares' : '10 Dolares';

console.log(elMayor(15,10))
console.log(tienesMembresia(false))
console.log(tienesMembresia(true))

const amigo = false;

const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor':'Loki',
    //(()=> 'Nick Fury')()
    elMayor(17,10)
];
console.log(amigosArr)


const nota = 100;//A+ A B+
const grado = nota >= 95 ? 'A+':
              nota >= 90 ? 'A':
              nota >= 75 ? 'B+':
              nota >= 70 ? 'B':
              nota >= 60 ? 'C+':
              nota >= 50 ? 'C': 'F';

console.log({nota,grado})