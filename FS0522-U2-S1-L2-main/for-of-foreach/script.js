// Questa lista è una lista di prodotti in vendita sul nostro shop.
// Ora noi la definiamo qua nel front-end, ma in un'application più
// realistica la leggeremo da una sorgete di dati esterna, un database
let prodotti = ['Mele', 'Pere', 'Banane', 'Mandarini', 'Matite', 'Penne', 'Fogli', 'Acqua', 'Pennarelli', 'Accendini']

// Vogliamo visualizzarli nella nostra pagina

// IL FOR ... OF È UN CASO PARTICOLARE, CREATO SPECIFICATAMENTE PER SCORRERE UN ARRAY
// Questo è il modo più facile per scorrere un Array di elementi in JavaScript.
// È DIVERSO DAL FOR ... IN - che scorre gli indici, non i valori della lista.
for (let prodotto of prodotti) {
  document.getElementById('lista-prodotti').innerHTML += `<div class="prodotto">${prodotto}</div>`
}

// Qesto for of è la stessa cosa che fare un for o un while come qua sotto
// for (let indice = 0; indice < prodotti.length; indice++) {
//   document.getElementById('lista-prodotti').innerHTML += `<div class="prodotto">${prodotti[indice]}</div>`
// }

// ------------------------------------
// STESSA IDENTICA COSA CHE SCRIVERE IL CODICE SEGUENTE
// let indice = 0;

// while (indice < prodotti.length) {
//   document.getElementById('lista-prodotti').innerHTML += `<div class="prodotto">${prodotti[indice]}</div>`
//   indice++;
// }
