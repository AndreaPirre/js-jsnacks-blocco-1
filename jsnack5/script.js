var calcolaBtn = document.getElementById('calcolaBtn')

calcolaBtn.addEventListener("click", function () {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var op = document.getElementById('operazioni').value;
    var result = document.getElementById('risultato');

    if (!op) {
            result.innerHTML = "Non hai selezionato nessuna operazione";
        }else if (op == 1) {
            result.innerHTML = num1 + num2;
        }else if (op == 2) {
            result.innerHTML = num1 - num2;
        }else if (op == 3) {
            result.innerHTML = num1 * num2;
        }else if (op == 4) {
            if (num2 == 0){
            result.innerHTML = "Attenzione! Il secondo numero è zero!";
            } else {
            result.innerHTML = num1 / num2;
            }
        }

});
