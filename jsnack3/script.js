document.getElementById('btn').addEventListener("click", function () {

    var num = parseInt(prompt("Dammi un numero"));
    var paragrafo = document.getElementById('colore')

    if (num > 0) {
        paragrafo.className = "verde";
    }else if (num < 0) {
        paragrafo.className = "red";
    } else {
        paragrafo.className = "blu";
    }

});
