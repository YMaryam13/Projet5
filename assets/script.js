const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

/***Ajout des EventListeners sur les flèches***/
const arrow_left = document.querySelector(".arrow_left");
arrow_left.addEventListener("click", silde_back);
const arrow_right = document.querySelector(".arrow_right");							
arrow_right.addEventListener("click", slide_next);

/***Ajout des bullet points au slider***/
const dots_div = document.querySelector(".dots");
for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div"); 						
	dot.className = "dot";									
	dots_div.appendChild(dot);								
	dot.addEventListener('click', () => { carrousel_update (count, i) } );		
}
let count = 0;

const dots = document.querySelectorAll(".dot");
dots[0].classList.add("dot_selected");

/***Modification de la slide au clic sur le bouton***/
const slide_img = document.querySelector(".banner-img");
const slide_p = document.querySelector("p");

function carrousel_update(old_count, count_add) { 						
	count = count_add;
	dots[old_count].classList.remove("dot_selected");
	slide_img.src = "./assets/images/slideshow/" + slides[count_add].image;
	slide_p.innerHTML = slides[count_add].tagLine;
	dots[count_add].classList.add("dot_selected");
}

/***Mise en place du défilement infini sur le carrousel***/
function slide_next() {
	let count_add;
	if (count < slides.length - 1) { 			
  	count_add = count + 1; 									
	} 
	else {
  	count_add = 0; 										
	}
	carrousel_update(count, count_add);							
}

function silde_back() {
	let count_add; 
	if (count === 0) { 									
  	count_add = slides.length - 1;   								
	} 
	else {
	count_add = count - 1 ;									
	}
	carrousel_update(count, count_add);							
}