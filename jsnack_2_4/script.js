var btn = document.getElementById('btn');
var listaNomi = ["pippo", "pluto", "topolino", "andrea"];
var nomeRisultato = document.getElementById('nomeRisultato');

btn.addEventListener("click",function () {
var nomeInserito = document.getElementById('nome').value;
var nomeTrovato = false;

for (var i = 0; i < listaNomi.length; i++) {
    if (nomeInserito == listaNomi[i]) {
        nomeTrovato = true;
    }
}

if (nomeTrovato == true) {
    esito.innerHTML = "Benvenuto " + nomeInserito + ", ti diamo il benvenuto alla festa!";
} else {
    esito.innerHTML = "Ci dispiace " + nomeInserito + ", non sei nell'elenco delle persone invitate alla festa";
}

});
