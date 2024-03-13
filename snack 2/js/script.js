// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.


//chiedo 2 volte una parola all'utente
const firstWords = prompt('scrivi una parola');
const secondWords = prompt('scrivi una parola');

//stampo prima la parola più corta e poi quella più lunga
if(firstWords.length < secondWords.length) {
    console.log('parola più corta',firstWords);
    console.log('parola più lunga',secondWords);
}else {
    console.log('parola più corta',secondWords);
    console.log('parola più lunga',firstWords);
}