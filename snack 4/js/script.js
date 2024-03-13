//Chiedi un numero di 4 cifre all’utente e 
//calcola la somma di tutte le cifre che compongono il numero.

//chiedo il numero all'utente
const userNumber = prompt('inserisci un numero di 4 cifre');

//per ogni carattere lo sommo al numero precedente
let sum = 0;

for(let i = 0; i < userNumber.length; i++) {
    const thisNumber = parseInt(userNumber[i]);

    sum += thisNumber;
}

console.log(sum);