
function printPrice() {
  let item = document.getElementById('fruit-select').value

  let display = document.getElementById('display')

  switch (item) { // Qua non ho una condizione ma un valore/una variabile/un'espressione
    case "banane":
      display.innerHTML = "Il prezzo delle banane è 1.99 euro al kg";
      // Qua posso anche eseguire altre istruzioni, senza bisogno di parentesi graffe
      break;

    case "mandarini":
      display.innerHTML = "Il prezzo dei mandarini è 2 euro al kg"
      break;

    case "mele_verdi":
      // Se non metto il break, va avanti ad eseguire quello che trova ignorando i case
      // finché non trova un break.
      display.innerHTML = "Ottima scelta, le nostre mele verdi sono le migliori"
    case "mele":
    case "mele_rosse":
      display.innerHTML = "Il prezzo delle mele è 1.5 euro al kg"
      break; // Questo è necessario per far funzionare lo switch, vuol dire "Esci dallo switch"

    default:
      display.innerHTML = "Frutto non presente."
      break;
  }

  // STESSA COSA CHE FARE UN IF COME IL SEGUENTE:
  // if (item === "mele") {
  //   alert("Il prezzo delle mele è 1.5 euro al kg");
  // } else if (item === "banane") {
  //   alert("Il prezzo delle banane è 1.99 euro al kg");
  // } else if (item === "mandarini") {
  //   alert("Il prezzo dei mandarini è 2 euro al kg");
  // } else {
  //   alert("Frutto non presente.")
  // }

}


