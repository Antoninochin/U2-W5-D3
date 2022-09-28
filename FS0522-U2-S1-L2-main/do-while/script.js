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

let guess;

// Questo ciclo è uguale al while, ma la prima volta viene eseguito sempre,
// prima ancora di controllare la condizione.
do {
  guess = Number(prompt("Inserisci un numero da 0 a 10"))

  if (guess !== numberToGuess) {
    alert("Ritenta, sarai più fortunato.")
  }

} while (guess !== numberToGuess)

alert("Hai indovinato, complimenti!")
