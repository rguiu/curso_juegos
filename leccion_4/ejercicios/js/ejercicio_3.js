var canvas = null;
var context = null;

var imagenes = [
	"imagenes/person01.png",
	"imagenes/person02.png",
	"imagenes/person03.png",
	"imagenes/person04.png",
	"imagenes/person05.png",
	"imagenes/person06.png",
	"imagenes/person07.png",
	"imagenes/person08.png",
	"imagenes/person09.png",
	"imagenes/person10.png",
	"imagenes/person11.png",
	"imagenes/person12.png",
	"imagenes/person13.png",
	"imagenes/person14.png",
	"imagenes/person15.png",
	"imagenes/person16.png"
];

var frames = [];

var counter = 0;

main = function() {

	// De momento no nos precupamos de esta parte del codigo.
	// Añado unos comentarios para saber lo que hace de todas formas

	// Busca el elemento con ID canvas en la pagina.
	canvas    = document.getElementById('canvas');

	// obtiene el contexto
	context   = canvas.getContext('2d');
	
	// definimos la dimension del canvas. 
	canvas.width  = window.innerWidth;
	canvas.height = window.innerHeight - 200;

	// Carga las imagenes del array de imagenes como ya hemos visto anteriormente
	// y metelas dentro del array de frames
	//
	// Despues llama al usa setInterval para que llame a la funcion animate 25 veces 
	// por segundo 
	// Recuerda
	// 1. un loop que cargue las imagenes
	// 2. el setInterval

	// AQUI EMPIEZA TU CODIGO


    // AQUI TERMINA TU CODIGO
};

var onImageLoad = function(){
	console.log("Imagen cargada.");
};

var animate = function() {
	context.clearRect(0,0,canvas.width, canvas.height);
	// Aqui tienes que empezar a pintar
	// 1. Pinta la imagen del frame correspondiente al indice counter
	// 2. Cambia el contador al siguiente frame

	// AQUI EMPIEZA TU CODIGO


	// AQUI TERMINA TU CODIGO
}

window.onload = main;