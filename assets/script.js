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

const moveleft = document.querySelector(".arrow_left");
moveleft.addEventListener('click', function(event){
	console.log('ça marche !')
});

const moveright = document.querySelector(".arrow_right");
moveright.addEventListener('click', function(event){
	console.log('bien!')
});

//const banner = document.querySelector("#banner");
//banner.appendChild(moveleft);
//banner.appendChild(moveright);