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

// Chiediamo subito all'utente di indovinare questo numero
let guess = Number(prompt("Inserisci un numero da 0 a 10"))

while (guess !== numberToGuess) {
  alert("Ritenta, sarai più fortunato")
  guess = Number(prompt("Inserisci un numero da 0 a 10"))
}

alert("Hai indovinato, complimenti!")

// // Solo con l'if, non ho modo di tentare più volte di indovinare.
// if(guess === numberToGuess) {
//   alert("Hai indovinato! Complimenti :)")
// } else {
//   alert("Ritenta, sarai più fortunato.")
// }
