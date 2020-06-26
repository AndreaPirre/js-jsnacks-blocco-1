// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga


var parolaUno = prompt("inserisci una parola: ");

var parolaDue = prompt("inserisci un'altra parola: ");

if (parolaUno.length > parolaDue.length) {
    console.log(parolaDue, parolaUno);
}else {
    console.log(parolaUno, parolaDue);
}
