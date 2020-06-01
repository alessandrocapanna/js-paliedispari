// Chiedere all’utente di inserire una parola
var parola = prompt('inserisci una parola');
// Creare una funzione per capire se la parola inserita è palindroma
function vedoPalindromicita(){
  var vedoContrarioParola = parola.split('').reverse().join('');
  return vedoContrarioParola;
}
var contrarioParola = vedoPalindromicita();
var messaggio = 'la tua parola non è palindroma';
if (contrarioParola == parola) {
  messaggio = 'la tua parola è palindroma';
}
console.log(messaggio);


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var pariDispari = prompt('digita pari o dispari');
while (pariDispari != 'pari' && pariDispari != 'dispari') {

  var pariDispari = prompt('inserisci pari o dispari');
}

var numero = parseInt(prompt('digita un numero da 1 a 5'));
while (numero > 5) {
  var numero = prompt('errore digita un numero da 1 a 5');
}

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function numeroRandom (){
  var numeroPc = Math.floor(Math.random() * 5 + 1);
  return numeroPc;
}
var numeroUno = numeroRandom ();

// Sommiamo i due numeri
var somma = parseInt(numero) + numeroUno;
console.log(somma);
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function vedoPariDispari (){
  if (somma % 2 == 0) {
    var check = 'pari';
  } else {
    var check = 'dispari';
  }
  return check;
}
var risultato = vedoPariDispari ();
// Dichiariamo chi ha vinto.
var testoMessaggio = 'hai perso';
if (pariDispari == risultato) {
  testoMessaggio = 'hai vinto';
}
console.log(testoMessaggio);
