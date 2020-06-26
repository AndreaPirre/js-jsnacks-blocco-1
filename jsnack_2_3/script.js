// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti. Esegui questo programma in due versioni, con il for
// e con il while.

// richiesta dei 5 numeri e salvataggio
var quantiNum = parseInt(prompt("Scrivi 5 se vuoi sommare 5 numeri, altrimenti inserisci un numero a piacere: "));
var numeri = [];
for (var i = 0; i <= quantiNum-1; i++) {
var numero = parseInt(prompt("Inserisci il " + (i+1) + " numero"));
numeri.push(numero);
};

console.log("Questi sono i numeri che hai inserito " + numeri);

var i=0;
var somma = 0;
while (i <= numeri.length-1) {
    somma += numero[i];
    i++;
};

console.log("La somma è " + somma);
