// Nella pagina c'è un bottone#lanciaMoneta.
// Al click su un bottone, il programma genera un numero casuale (tra 0 e 9).
// Se il numero è pari mostra un img con la testa della moneta.
// Se è dispari mostra un'altra img con la croce della moneta.


document.getElementById("lanciaMoneta").addEventListener("click", function() {
    var max = 9;
    var min = 0;
    var num = Math.floor(Math.random()*(max - min + 1)) + min;
    var elem = document.getElementById('numero');

    elem.classList.add("testa", "croce");

    if (!(num%2)) {
        elem.classList.remove("croce");
    } else {
        elem.classList.remove("testa");
    }

    elem.innerHTML = num;

});
