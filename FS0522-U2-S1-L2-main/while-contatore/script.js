/*
1)
Vogliamo scrivere un programma che chiede all'utente di inserire un numero.
Genera un numero a caso. Se l'utente indovina questo numero allora vince.
Altrimenti, perde.

2) Vogliamo dare all'utente più tentativi, l'utente può inserire numeri finché non indovina.
Oppure finché non arriva a N tentativi.
*/

// All'inizio del programma generiamo un numero a caso tra 0 e 10
let numberToGuess = Math.round(Math.random() * 10)
let contatore = 0

let guess = null;

while (guess !== numberToGuess && contatore < 3) {
  guess = Number(prompt("Inserisci un numero da 0 a 10"))

  if (guess === numberToGuess) {
    alert("Hai indovinato, complimenti!")
  } else {
    alert("Ritenta, sarai più fortunato")
    contatore++;
  }
}

if(contatore === 3) { // Se qua ho contatore === 3 vuol dire che ho esaurito i tentativi?
  alert("Hai terminato i tentativi.")
}

// // Solo con l'if, non ho modo di tentare più volte di indovinare.
// if(guess === numberToGuess) {
//   alert("Hai indovinato! Complimenti :)")
// } else {
//   alert("Ritenta, sarai più fortunato.")
// }
