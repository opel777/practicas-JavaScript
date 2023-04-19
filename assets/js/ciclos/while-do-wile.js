const carros = ['Ford ', 'Mazda', 'Toyota', 'Honda', 'BMW'];

let i = 0;

// while (i < carros.length) {
//     console.log(carros[i]);
//     i++;
// }

console.warn("While")
while(carros[i]){
    if(i === 1){
        i++;
        //break;
        continue;
    }
    console.log(carros[i]);
    i++;
}



console.warn("Do While")
//let j = 10;
let j = 10;
do{
    console.log(carros[j]);
j++;
}while(carros[j]);