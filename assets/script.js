const slides = [
	{
		"image": document.getElementsByClassName("banner-img")[0].src,
		"tagLine": document.getElementsByClassName("banner-text")[0].innerHTML,
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const imgSlide = document.getElementsByClassName("banner-img")[0];
const txtSlide = document.getElementsByClassName("banner-text")[0];

function updateSlide(i){
	imgSlide.src = slides[i].image;
	txtSlide.innerHTML = slides[i].tagLine;
}

updateSlide(0);

/* Mouvement des flèches */
let currentSlide = 0;

const moveRight = document.querySelector(".arrow_right");
moveRight.addEventListener('click', function(){
	console.log('flèche droite ok !');
	currentSlide = (currentSlide + 1) % slides.length;
	updateSlide(currentSlide);
	selectedBulletPoints(currentSlide);
});

const moveLeft = document.querySelector(".arrow_left");
moveLeft.addEventListener('click', function(){
	console.log('flèche gauche ok !')
	currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide -1;
	updateSlide(currentSlide);
	selectedBulletPoints(currentSlide);
});



/* Génération des points de la bannière*/

function createBulletPoints(slides){
	for (let i=0; i < slides.length; i++){
		const bulletPoint = document.createElement("div");
		bulletPoint.className = "dot";

		const groupBulletPoints = document.querySelector(".dots");
		groupBulletPoints.appendChild(bulletPoint);

		selectedBulletPoints(0)
	}};

function selectedBulletPoints(slidesNumber){
	const bullets = document.querySelectorAll(".dot");

	const previousSelectedBullet = bullets[slidesNumber -1 < 0 ? bullets.length - 1 : currentSlide -1];
	const previousBulletclasses = previousSelectedBullet.classList;
	previousBulletclasses.remove("dot_selected");

	const nextSelectedBullet = bullets[(slidesNumber +1) % bullets.length];
	const nextBulletclasses = nextSelectedBullet.classList;
	nextBulletclasses.remove("dot_selected");

	const selectedBullet = bullets[slidesNumber];
	const classes = selectedBullet.classList;
	classes.add("dot_selected");
};

createBulletPoints(slides);



