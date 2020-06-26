// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.

var numDispari = [];

for (var i = 0; i < 6; i++) {

    var numero = prompt("Inserisci un numero");
    if (numero%2==1) {
        numDispari.push(numero);
    }
}

console.log(numDispari);
