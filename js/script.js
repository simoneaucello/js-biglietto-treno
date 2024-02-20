const kmTravel = parseFloat (prompt('Quanti km vuoi percorrere?'));
console.log(kmTravel); 

const agePassenger = parseFloat (prompt('Quanti anni hai?'));
console.log(agePassenger);

const kmPrice = 0.21;
console.log(kmPrice);

let discountPrice = '';
console.log('prezzo scontato' , discountPrice);


let totPrice = kmTravel * kmPrice - discountPrice;    
console.log(totPrice);

if(agePassenger < 18){
  discountPrice = totPrice - (totPrice * 20 / 100);
}else if(agePassenger > 65){
  discountPrice = totPrice - (totPrice * 40 / 100);
}
console.log(discountPrice);


