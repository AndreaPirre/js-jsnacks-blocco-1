document.getElementById("btn").addEventListener("click", function() {
    var max = 10;
    var min = 1;
    var num = Math.floor(Math.random()*(max - min + 1)) + min;
    var elem = document.getElementById('numero');

    elem.classList.add("pari", "dispari");

    if (!(num%2)) {
        elem.classList.remove("pari");
    } else {
        elem.classList.remove("dispari");
    }

    elem.innerHTML = num;

});
