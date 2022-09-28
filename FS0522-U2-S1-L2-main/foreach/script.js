// Questa lista è una lista di prodotti in vendita sul nostro shop.
// Ora noi la definiamo qua nel front-end, ma in un'application più
// realistica la leggeremo da una sorgete di dati esterna, un database
let prodotti = ['Mele', 'Pere', 'Banane', 'Mandarini', 'Matite', 'Penne', 'Fogli', 'Acqua', 'Pennarelli', 'Accendini']

// Vogliamo visualizzarli nella nostra pagina

// Altro modo per scorrere una lista/un array

prodotti.forEach(visualizzaProdotto)
// For each element, call this function
// -->> ecco qui la funzione che dovrai richiamare per ogni elemento...
// Questo forEach scorre gli elementi dell'array, e per ognuno chiama la funzione
// che li passo come parametro (la callback), e passa come parametro a quella funzione
// l'elemento stesso

// IMPORTANTE:
// Quando passo una funzione a un'altra funzione, come parametro, devo passare solo il nome.
// Non devo chiamarla.
// Quando passo una funzione a un'altra funzione, si chiama callback.
// Callback -> richiamami, chiamami tu --> sarà quella funzione a richiamare la funzione che passo.

// Il forEach è uguale a fare un for of come questo:
// for (let p of prodotti) {
//   visualizzaProdotto(p)
// }

function visualizzaProdotto(valore) {
  document.getElementById('lista-prodotti').innerHTML += `<div class="prodotto">${valore}</div>`
  console.log(valore)
}

// Stessa cosa che usare un while o un for o un for ... of come visto negli altri esempi

// Perché può essere più utle del for...of a volte?
// Se ho già una funzione pronta da richiamare, è molto comodo
// Ad esempio, la richiamo su un'altra lista
let altriProdotti = ['Scarpe', 'Stivali', 'Sandali']
altriProdotti.forEach(visualizzaProdotto)


let numeri = [1, 2, 3, 4, 5, 5]
numeri.forEach(visualizzaProdotto)


