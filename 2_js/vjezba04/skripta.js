const uvjet = true;

if(uvjet){
    console.log('Uvjet je true');
}

if(uvjet){
    console.log('Uvjet je true');
    console.log('Uvjet je false');
}

if(uvjet){
    console.log('Bez {} true');
}else
    console.log('Bez {} false');
    console.log('Ovo se treba izvesti ako je false');

const ocjena = 3;

if(ocjena===1){
    console.log('Nedovoljan');
}else if(ocjena===2){
console.log('Dovoljan')
}else if(ocjena===3){
console.log('Dobar');
}

else{
    console.log('Ocjena nije 1, 2 ili 3');
}

if(uvjet){
    if('ocjena>1'){
        console.log('Oba uvjeta su zadovoljena');
    }
}

if(uvjet && ocjena>1){
    console.log('Kraći način zadovoljavanja oba uvjeta');
    
}

if(ocjena>=2){
    console.log('Pozitivna')
}else{
    console.log('Negativna');
    
}
    

console.log(ocjena>2 ? 'Pozitivna' : 'Negativna');

const ime='';

if(ime){
    console.log('Ime je postavljeno');
}

const b=0;
let objekt=null;
let nedefinirano;

const broj = Number('aaa');
console.log(broj);













