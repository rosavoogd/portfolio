var teller = 0;
var hartje = document.querySelector(".hartje")

/*************/
/* DE KATTEN */
/*************/
var katten = [ //array met daarin objecten
  {
    naam: 'Rommel',
    age: 3,
    src: 'img/rommel.jpg',
  },
  {
    naam: 'Tijger',
    age: 2,
    src: 'img/tijger.jpeg',
  },
  {
    naam: 'Zorro',
    age: 9,
    src: 'img/zorro.jpg',
  },
  {
    naam: 'Momo',
    age: 3,
    src: 'img/momo.jpeg',
  },
  {
    naam: 'Nijn',
    age: 8,
    src: 'img/nijn.jpg',
  },
  {
    naam: 'Ginger',
    age: 10,
    src: 'img/ginger.jpeg',
  }
];

/*******************************/
/* VOEG KATTEN TOE AAN DE HTML */
/*******************************/
for (i = 0; i < katten.length; i++) {
  var nieuwekat = document.createElement('article'); //we maken een nieuwe kat aan als article
  nieuwekat.setAttribute('id', katten[i].naam); //we geven het article een id (katten naam)
  nieuwekat.setAttribute('class', 'cat'); //en een class genaamd cat


  var plaatjenieuwekat = document.createElement('img'); //we maken een nieuw plaatje aan als img
  plaatjenieuwekat.setAttribute('src', katten[i].src); //hier geven we de src van het plaatje aan

  var infonieuwekat = document.createElement('h1'); //we maken de katten info aan als h1
  infonieuwekat.textContent = katten[i].naam + " (" + katten[i].age + ")"; // die vul je met naam + (leeftijd)

  nieuwekat.appendChild(plaatjenieuwekat); //voegt het plaatje aan het article nieuwekat toe
  nieuwekat.appendChild(infonieuwekat); //voegt de naam + leeftijd toe aan article nieuwekat (zet het in het article)

  document.querySelector('section').appendChild(nieuwekat); //zoek section op, voeg daar heel het article aan toe

}

/*****************************/
/* LAAT DE KNOPJES LUISTEREN */
/*****************************/
var knopjes = document.querySelectorAll(".knopje"); //in het document zoeken naar alle elementen met .knopje
for (i = 0; i < knopjes.length; i++) {
  knopjes[i].addEventListener('click', kiezen); //als je er op klikt wordt de functie kiezen uitgevoerd
}

/*********************************/
/* HET ECHTE TINDEREN EN MATCHEN */
/*********************************/
function kiezen(event) { //info over het event stoppen we in de varibelen event
  var allekatten = document.querySelectorAll('section .cat'); //in het document (html) ga je zoeken naar het element met de class cat
  if (event.target.classList.contains("dislike")) { //uit het event, uit target (knopje), heeft dit knopje de class dislike?
    allekatten[teller].classList.add('gedisliked');
    hartje.classList.add("invisible"); //we hebben de kat daarvan heb ik de lijst met classes en daar voeg je dislike aan toe.
  } else {
    allekatten[teller].classList.add('geliked');
    hartje.classList.remove("invisible")

  }
  teller++; // telt na de huidige kat er 1 bij op
}
