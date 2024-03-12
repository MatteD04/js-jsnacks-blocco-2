// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

let words = [] ;

for(let i = 0; i < 2; i++) {
    
    //chiedo 2 volte una parola all'utente
    const userWords = prompt('scrivi una parola');

    words.push (userWords);
}

//misuro la lunghezza delle parole
const numberWord1 = words[0].length;
const numberWord2 = words[1].length;

//stampo prima la parola più corta e poi quella più lunga
if(numberWord1 < numberWord2) {
    console.log('parola più corta',words[0]);
    console.log('parola più lunga',words[1]);
}else {
    console.log('parola più corta',words[1]);
    console.log('parola più lunga',words[0]);
}