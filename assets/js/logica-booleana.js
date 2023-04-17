const regresaTrue = ()=>{
    console.log('Regresa True');
    return true;
}

const regresafalse = ()=>{
    console.log('Regresa False');
    return false;
}

console.warn('Not o la negacion');

console.log(true);//true
console.log(!false);//true
console.log(false);//false
console.log(!true);//false

console.log(!regresafalse());//true

console.warn('And');// Regresa true o verdadero si todos los valores son verdaderos
console.log(true && true);
console.log(true && false)
console.log(false && false)


console.log('===============');
console.log(regresaTrue() && regresafalse());

console.log('===============');
console.log(   regresafalse() && regresaTrue());// en este orden al conseguir 
//la mprimera instruccion false no sigue ejecutando el codigo


console.log('======= && ========');

regresafalse() && regresaTrue()


console.log('======= &&&& ========');

regresaTrue() && regresafalse();

console.log( '4 condiciones', true && true && true && false)// false


let nombre = null


console.log(null == undefined)


console.warn('OR');// true
console.log( true  || false);
console.log( false || false);
console.log( false || true);

console.log(regresaTrue() || regresafalse());

console.log( '4 condiciones', true || true || true ||false)// true


console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola  Mundo';
const a2 = true && 'Hola Mundo' && 'Soy el ultimo valor';
const a3 = false && 'soy un valor' && 'soy otro valor';
const a4 = soyFalso || soyUndefined || soyNull || 'ya no soy falso de nuevo';
const a5 = soyFalso || soyUndefined || regresaTrue() || 'ya no soy falso de otra vez';
const a6 = soyFalso && soyUndefined && soyNull && 'ya no soy falso de nuevo';
console.log({a1})
console.log({a2})
console.log({a3})
console.log({a4})
console.log({a5})
console.log({a6})




