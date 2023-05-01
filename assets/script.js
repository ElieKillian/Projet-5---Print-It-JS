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
]

/* Mouvement des flèches */

const moveleft = document.querySelector(".arrow_left");
moveleft.addEventListener('click', function(event){
	console.log('flèche gauche ok !')
});

const moveright = document.querySelector(".arrow_right");
moveright.addEventListener('click', function(event){
	console.log('flèche droite ok !')
});

/* Génération des points de la bannière*/

function createbulletpoints(slides){
	for (let i=0; i < slides.length; i++){
		const bulletpoint = document.createElement("div");
		bulletpoint.className = "dot";

		const groupbulletpoints = document.querySelector(".dots");
		groupbulletpoints.appendChild(bulletpoint);

		console.log('fonction ok!')
	}

	const selectbullet = document.querySelector(".dot");
	const classes = selectbullet.classList;
	classes.add("dot_selected");
};

createbulletpoints(slides);




