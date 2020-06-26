// Calcola la somma e la media di 10 numeri chiesti all'utente.

var somma = 0;
for (var i = 0; i < 10; i++) {
    var numeri = parseInt(prompt("  Scrivi un numero"));
    somma+=numeri;
}
console.log("La somma dei numeri è: " + somma);
console.log("La media aritmetica dei numeri inseriti è: " + (somma/10));
