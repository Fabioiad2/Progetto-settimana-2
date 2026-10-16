/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto questo blocco.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Workflow consigliato: prima costruisci la Versione Base in HTML/CSS,
  poi torna qui per la Versione Intermedia (generazione griglia da array di prodotti)
  e per la Versione Avanzata (filtri, ordinamento, carrello dinamico, localStorage).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato in settimana.
*/


/* VERSIONE INTERMEDIA — array prodotti
   Crea l'array "prodotti" con almeno 12 oggetti.
   Ogni oggetto: nome, categoria, prezzo, rating (1-5), immagine, disponibile.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const products = [
   // Categoria: Elettronica
   {
      nome: "Cuffie wireless",
      categoria: "elettronica",
      prezzo: 50,
      reting: 4,
      immgine: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
      disponibile: true
   },
   {
      nome: "iPhone",
      categoria: "elettronica",
      prezzo: 999,
      reting: 5,
      immgine: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60",
      disponibile: true
   },
   {
      nome: "Smartwatch",
      categoria: "elettronica",
      prezzo: 180,
      reting: 4,
      immgine: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60",
      disponibile: true
   },

   // Categoria: Abbigliamento
   {
      nome: "Maglia",
      categoria: "abbigliamento",
      prezzo: 25,
      reting: 3,
      immgine: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=60",
      disponibile: false
   },
   {
      nome: "Cappello",
      categoria: "abbigliamento",
      prezzo: 15,
      reting: 2,
      immgine: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&auto=format&fit=crop&q=60",
      disponibile: false
   },
   {
      nome: "Sneakers sportive",
      categoria: "abbigliamento",
      prezzo: 85,
      reting: 5,
      immgine: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60",
      disponibile: true
   },

   // Categoria: Casa
   {
      nome: "Lampada da tavolo",
      categoria: "casa",
      prezzo: 40,
      reting: 4,
      immgine: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop&q=60",
      disponibile: true
   },
   {
      nome: "Bollitore elettrico",
      categoria: "casa",
      prezzo: 30,
      reting: 4,
      immgine: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=500&auto=format&fit=crop&q=60",
      disponibile: true
   },
   {
      nome: "Tazza in ceramica",
      categoria: "casa",
      prezzo: 12,
      reting: 5,
      immgine: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=60",
      disponibile: true
   },

   // Categoria: Libri
   {
      nome: "Romanzo fantasy",
      categoria: "libri",
      prezzo: 18,
      reting: 5,
      immgine: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60",
      disponibile: true
   },
   {
      nome: "Manuale JavaScript",
      categoria: "libri",
      prezzo: 35,
      reting: 4,
      immgine: "https://images.unsplash.com/photo-1532012164546-f432f2e3777f?w=500&auto=format&fit=crop&q=60",
      disponibile: true
   },
   {
      nome: "Taccuino rilegato",
      categoria: "libri",
      prezzo: 10,
      reting: 3,
      immgine: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&auto=format&fit=crop&q=60",
      disponibile: false
   }
];
console.table(products)


/* VERSIONE INTERMEDIA — formattaPrezzo(prezzo)
   Funzione che ritorna una stringa tipo "€ 19,99".
   Esempio in console.log: Monitor: € 150,00
*/
function formattaPrezzo(prezzo){
   console.log(prezzo.toFixed(2))
}
formattaPrezzo(160.99)



/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE INTERMEDIA — stelline(rating)
   Funzione che ritorna una stringa di stelline piene/vuote.
   Esempio: rating 3 → "★★★☆☆"
   Esempio in console.log: Monitor: rating 3 → "★★★☆☆"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function stellina(rating) {
   switch (rating) {
      case 1:
         return `rating ${rating}★☆☆☆☆`
      case 2:
         return `rating ${rating}★★☆☆☆`
      case 3:
         return `rating ${rating}★★★☆☆`
      case 4:
         return `rating ${rating}★★★★☆`
      case 5:
         return `rating ${rating}★★★★★`
   }
   return rating
}
console.log(
   stellina(5)

)

/* VERSIONE INTERMEDIA — Filtro per categoria
   Funzione che riceve il parametro categoria e filtra l'array prodotti mostrando solo i prodotti della categoria ricevuta
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const arrayFiltratiPerCategoria = []
function filtroCategoria(categoria) {
   for (let p = 0; p < products.length; p++) {
      let singleProduct = products[p]
      console.log(singleProduct.nome, "nome singolo prodotto")
      if (singleProduct.categoria === categoria) {
         console.log("prodotti categoria", categoria)
          arrayFiltratiPerCategoria.push(singleProduct)
          console.log(arrayFiltratiPerCategoria)
      }
   }
   console.log("array categoria"+ categoria ,arrayFiltratiPerCategoria)
   return arrayFiltratiPerCategoria
}

filtroCategoria("abbigliamento")

/* VERSIONE INTERMEDIA — Filtro disponibilità e rating
   Funzione che genera un array filtrato dall'array prodotti, mostrando soltanto i prodotti disponibili con rating >= 3
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const filtredArrayrating = []
function filterRating() {
   for (let p = 0; p < products.length; p++) {
      let singleProduct = products[p]
      console.log(singleProduct.nome, "nome singolo prodotto")
      if (singleProduct.reting >= 3) {
         filtredArrayrating.push(singleProduct)
      }
   }
}
filterRating()
console.log(filtredArrayrating)

/* --------------------------------------------------------------

/* VERSIONE AVANZATA — renderProdotti(lista)
   Funzione che, dato un array di prodotti, genera la griglia nel DOM.
   Niente HTML hard-coded per i prodotti: tutto generato dal JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for (let p = 0; p < products.length; p++) {
   let prodotto = products[p]
   console.log(prodotto, "prodotto in card")
   let row = document.getElementById('rowUno')

   // si è ridondante con quello scritto sotto avrei potuto riutilizzare questo
   let stella = "stelline"
   console.log(prodotto.reting)
   switch (prodotto.reting) {
      case 1:
         stella = `★☆☆☆☆`
         console.log(stella)
         break

      case 2:
         stella = `★★☆☆☆  `
         console.log(stella)
         break

      case 3:
         stella = `★★★☆☆  `
         console.log(stella)
         break

      case 4:
         stella = `★★★★☆  `
         console.log(stella)
         break


      case 5:
         stella = `★★★★★`
         console.log(stella)
         break
   }
   console.log(stella)


  row.innerHTML += `
    <div class="card">
      <div class="cardContent">
        <div class="imgCard">
          <img src="${prodotto.immgine}">
        </div>
        <h4>${prodotto.nome}</h4>
        <span class="stelline">${stella}</span> (${prodotto.reting})
        <p class="productPrice">€ ${prodotto.prezzo.toFixed(2)}</p>
        <button onclick="addtoCart()" class="addToCart">Aggiungi al carrello</button>
      </div>
    </div>
`;
}

/* VERSIONE AVANZATA — Aggiungi al carrello
   Quando si clicca il bottone "Aggiungi al carrello", incrementa il contatore
   nell'header (Carrello (0) → Carrello (1) → ...).
   Per i prodotti esauriti: bottone disabilitato e testo "Esaurito".
   Suggerimento: usa una closure come visto in aula
*/

// in dom.html

let count = parseInt(localStorage.getItem('cartCount')) || 0;


function addtoCart() {
   localStorage.setItem('cartCount', count); console.log(count)
   count = count + 1
   return count
}

let selezionaCounter = document.querySelector('#ValoreCounter').innerHTML += `${count}`


/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Ordinamento
   Menu a tendina con: Prezzo crescente, Prezzo decrescente, Rating.
   Suggerimento: per rendere più leggibile la select puoi usare optgroup
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Riepilogo carrello
   Pagina carrello con elenco prodotti aggiunti, totale, bottone "Svuota".
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — localStorage
   Il carrello sopravvive al refresh della pagina.
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// fatto a riga 242
