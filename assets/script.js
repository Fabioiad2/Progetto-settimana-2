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
   {
      nome: "Cuffie wireless",
      categoria: "elettronica",
      prezzo: 50,
      reting: 4,
      immgine: true,
      disponibile: true
   },

   {
      nome: "Iphone",
      categoria: "elettronica",
      prezzo: 0,
      reting: 5,
      immgine: true,
      disponibile: true

   },

   {
      nome: "Maglia",
      categoria: "abbigliamento",
      prezzo: 0,
      reting: 3,
      immgine: false,
      disponibile: false
   },

   {
      nome: "Cappello",
      categoria: "abbigliamento",
      prezzo: 0,
      reting: 2,
      immgine: false,
      disponibile: false
   },

   {
      nome: "",
      categoria: "",
      prezzo: 0,
      reting: 0,
      immgine: true,
      disponibile: true
   },

   {
      nome: "",
      categoria: "",
      prezzo: 0,
      reting: 0,
      immgine: true,
      disponibile: true
   },

   {
      nome: "",
      categoria: "",
      prezzo: 0,
      reting: 0,
      immgine: true,
      disponibile: true
   },

   {
      nome: "",
      categoria: "",
      prezzo: 0,
      reting: 0,
      immgine: true,
      disponibile: true
   },

   {
      nome: "",
      categoria: "",
      prezzo: 0,
      reting: 0,
      immgine: true,
      disponibile: true
   },

   {
      nome: "",
      categoria: "",
      prezzo: 0,
      reting: 0,
      immgine: true,
      disponibile: true
   },
   {
      nome: "",
      categoria: "",
      prezzo: 0,
      reting: 0,
      immgine: true,
      disponibile: true
   },
   {
      nome: "",
      categoria: "",
      prezzo: 0,
      reting: 0,
      immgine: true,
      disponibile: true
   }
]
console.table(products)


/* VERSIONE INTERMEDIA — formattaPrezzo(prezzo)
   Funzione che ritorna una stringa tipo "€ 19,99".
   Esempio in console.log: Monitor: € 150,00
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE INTERMEDIA — stelline(rating)
   Funzione che ritorna una stringa di stelline piene/vuote.
   Esempio: rating 3 → "★★★☆☆"
   Esempio in console.log: Monitor: rating 3 → "★★★☆☆"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function stellina(rating){
   switch(rating){
      case 1:
         return`rating ${rating}★☆☆☆☆`
      case 2:
         return`rating ${rating}★★☆☆☆`
      case 3:
         return`rating ${rating}★★★☆☆`
      case 4:
         return`rating ${rating}★★★★☆`
      case 5:
         return`rating ${rating}★★★★★`
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
function filtroCategoria(categoria){
  for(let p = 0; p < products.length; p++){
     let singleProduct = products[p]
     console.log(singleProduct.nome,"nome singolo prodotto")
   if(singleProduct.categoria === categoria){
      console.log("prodotti categoria",categoria)
      return arrayFiltratiPerCategoria.push(singleProduct)
   }
  }
}
filtroCategoria()



/* VERSIONE INTERMEDIA — Filtro disponibilità e rating
   Funzione che genera un array filtrato dall'array prodotti, mostrando soltanto i prodotti disponibili con rating >= 3
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const filtredArrayrating = []
function filterRating(){
  for(let p = 0; p < products.length; p++){
     let singleProduct = products[p]
     console.log(singleProduct.nome,"nome singolo prodotto")
   if(singleProduct.reting >=3){
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
for(let p = 0; p < products.length; p++ ){
   let prodotto = products[p]
   console.log(prodotto,"prodotto in card")
   let row =document.getElementById('row')
   row.innerHTML += `
        <div class="card">
          <div class="cardContent">
            <div class="imgCard"></div>
            <h4>${prodotto.nome}</h4>
            ${prodotto.reting}
            <p>${prodotto.prezzo}</p>
            <button class="addToCart">Aggiungi al carrello</button>
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
