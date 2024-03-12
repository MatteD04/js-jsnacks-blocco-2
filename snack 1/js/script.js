//L'utente inserisce un numero nel prompt, se è pari stampa il numero,
//se è dispari stampa il numero successivo

//chiedo all'utente un numero
let userNumber = parseInt(prompt('inserisci un numero'));
console.log('il numero inserito è',userNumber);

//se il numero è pari lo stampo
if((userNumber % 2) === 0) {
    console.log('il numero dato è',userNumber)
    
  //altrimenti stampo il successivo  
} else {
    console.log('il numero dato è',userNumber + 1);
}
