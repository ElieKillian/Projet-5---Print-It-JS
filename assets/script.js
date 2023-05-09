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
	console.log(slides[i]);
}

updateSlide(0);

/* Mouvement des flèches */
let currentSlide = 0;

const moveright = document.querySelector(".arrow_right");
moveright.addEventListener('click', function(){
	console.log('flèche droite ok !');
	currentSlide = (currentSlide + 1) % slides.length;
	updateSlide(currentSlide);
	selectedbulletpoints(currentSlide);
});

const moveleft = document.querySelector(".arrow_left");
moveleft.addEventListener('click', function(){
	console.log('flèche gauche ok !')
	currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide -1;
	updateSlide(currentSlide);
	selectedbulletpoints(currentSlide);
});



/* Génération des points de la bannière*/

function createbulletpoints(slides){
	for (let i=0; i < slides.length; i++){
		const bulletpoint = document.createElement("div");
		bulletpoint.className = "dot";

		const groupbulletpoints = document.querySelector(".dots");
		groupbulletpoints.appendChild(bulletpoint);

		selectedbulletpoints(0)
	}};

function selectedbulletpoints(slidesNumber){
	const bullets = document.querySelectorAll(".dot");
	const currentSelectedBullet = bullets[slidesNumber -1 < 0 ? bullets.length - 1 : currentSlide -1];
	console.log("currentSelectedBullet : ", currentSelectedBullet); //previous

	const currentBulletclasses = currentSelectedBullet.classList;
	console.log("currentBulletclasses :", currentBulletclasses);
	currentBulletclasses.remove("dot_selected");

	const selectedbullet = bullets[slidesNumber];
	const classes = selectedbullet.classList;
	classes.add("dot_selected");

};

createbulletpoints(slides);



