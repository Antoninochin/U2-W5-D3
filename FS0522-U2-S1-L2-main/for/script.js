
// Questa lista è una lista di prodotti in vendita sul nostro shop.
// Ora noi la definiamo qua nel front-end, ma in un'application più
// realistica la leggeremo da una sorgete di dati esterna, un database
let prodotti = ['Mele', 'Pere', 'Banane', 'Mandarini', 'Matite', 'Penne', 'Fogli', 'Acqua', 'Pennarelli', 'Accendini']

// Vogliamo visualizzarli nella nostra pagina

// Partiamo dall'indice 0
for (let indice = 0; indice < prodotti.length; indice++) {
  document.getElementById('lista-prodotti').innerHTML += `<div class="prodotto">${prodotti[indice]}</div>`
}

// ------------------------------------
// STESSA IDENTICA COSA CHE SCRIVERE IL CODICE SEGUENTE
// let indice = 0;

// while (indice < prodotti.length) {
//   document.getElementById('lista-prodotti').innerHTML += `<div class="prodotto">${prodotti[indice]}</div>`
//   indice++;
// }

