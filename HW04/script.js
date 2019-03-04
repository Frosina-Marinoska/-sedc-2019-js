let h1rer= document.querySelectorAll("h1");
// console.log(h1rer.length);
h1rer[0].innerText = "prv h1";
h1rer[1].innerText = "vtor h1";
let prer= document.querySelectorAll("p");
prer[0].innerText = "prv p";
prer[1].innerText = "vtor p";



let yaya = prer[1].nextElementSibling.innerText = "sibling element na vtoriot paragraf";
let gogo = h1rer[1].nextElementSibling.innerText = "sibling element na vtoriot h1";