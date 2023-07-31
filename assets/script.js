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

const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", function(){
	let nextSlide; 
	if (currentSlide === 0) { 									
		nextSlide = slides.length - 1;   								
	} 
	else {
		nextSlide = currentSlide - 1 ;									
	}
	changeSlide(currentSlide, nextSlide);	
});

const arrowRight = document.querySelector(".arrow_right");							
arrowRight.addEventListener("click", function(){
	let nextSlide;
	if (currentSlide < slides.length - 1) { 			
		nextSlide = currentSlide + 1; 									
	} 
	else {
		nextSlide = 0; 										
	}
	changeSlide(currentSlide, nextSlide);
});

let currentSlide = 0;

const dots = document.querySelector(".dots");
for (let i = 0; i < slides.length; i++) {
	const addDot = document.createElement("div"); 						
	addDot.className = "dot";									
	dots.appendChild(addDot);								
	addDot.addEventListener('click', () => {
		changeSlide (currentSlide, i)
	} );		
}

const dot = document.querySelectorAll(".dot");
dot[0].classList.add("dot_selected");

const img = document.querySelector(".banner-img");
const p = document.querySelector("p");

function changeSlide(previousSlide, nextSlide) { 						
	currentSlide = nextSlide;
	dot[previousSlide].classList.remove("dot_selected");
	img.src = "./assets/images/slideshow/" + slides[nextSlide].image;
	p.innerHTML = slides[nextSlide].tagLine;
	dot[nextSlide].classList.add("dot_selected");
}