//Crea due tag div con due id diversi:
//un div avrà il testo colorato di rosso mentre l’altro di verde.
//Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

//creo un array di numeri
const numbers = [1,2,3,4,5,6,7,8,9,10];

const redDiv = document.querySelector('#rosso');
const greenDiv = document.querySelector('#verde');

//se i numeri sono pari li stampo nell'id verde
for(let i = 0; i < numbers.length; i++) {

  const thisNumber = numbers[i];


  if((thisNumber % 2) === 0) {
    greenDiv.innerHTML += thisNumber + ' ';

  //altrimenti stampo i numeri nell'id rosso  
  } else {
    redDiv.innerHTML += thisNumber + ' ';
  }
}