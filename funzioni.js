//Campi da compilare con i seguenti valori(età-km)

var eta = prompt('Inserisci la tua età:', '');
var km = prompt('Inserisci i chilometri:', '');

//Calcolo funzioni con i relativi sconti 20-40%

var prezzoperchilometro = km * 0.211111;

if(eta < 18){
    prezzoperchilometro = prezzoperchilometro * 0.80;
}
else if (eta>65){
    prezzoperchilometro = prezzoperchilometro * 0.60;                      //Metodo per ridurre i decimali [toFixed(valore)]         
}
document.getElementById('paragraforisultato').innerHTML = 'il prezzo finale è:' + prezzoperchilometro.toFixed(2) + '€';


