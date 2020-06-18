var numeroUno = prompt("Inserisci il numero:");

var numeroDue = prompt("Inserisci il secondo numero:");

if  (!isNaN(numeroUno) && !isNaN(numeroDue)) {
    if (numeroUno > numeroDue) {
        console.log(numeroUno);
    }else if (numeroDue > numeroUno) {
        console.log(numeroDue);
    }else {
        console.log("I due numeri sono uguali");
    }
}
