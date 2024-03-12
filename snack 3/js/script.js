//Crea due tag div con due id diversi:
//un div avrà il testo colorato di rosso mentre l’altro di verde.
//Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

//creo un array di numeri
let numbers = [1,2,3,4,5,6,7,8,9,10];

const numbContainer = document.querySelector('#...');

//se i numeri sono pari li stampo nell'id verde
if((numbers[i] % 2) === 0) {
    numberState = i
    numbColor = 'verde'

  //altrimenti stampo i numeri nell'id rosso  
} else {
    numberState = i
    numbColor = 'rosso'
}

//stampo in html
const divLi = `<div id="${numbColor}">${numberState}</div>`;

//... 
    innerHTML += divLi;