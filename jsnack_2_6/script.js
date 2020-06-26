// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.

var btn = document.getElementById('btn');

btn.addEventListener("click", function() {

    var numVolte = parseInt(prompt("Di quanti numeri vuoi ottenere il cubo? "));

    for (var i = 0; i < numVolte; i++) {
        var numero = parseInt(prompt("Dammi un numero: "));
        console.log(Math.pow(numero, 3));
    };


});
