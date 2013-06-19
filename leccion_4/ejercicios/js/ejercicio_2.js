var canvas = null;
var context = null;
var image = null;

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

	image = new Image();
    image.onload = onImageLoad;
    image.src = "imagenes/person01.png";
};

onImageLoad = function(){
    console.log("Imagen cargada");

    // Pinta la imagen en las coordenadas 100, 10
    // recuerda que el metodo drawImage esta asociafo 
    // al context 2D no al canvas

	// AQUI EMPIEZA TU CODIGO
	context.drawImage(image, 100, 10);

    // AQUI TERMINA TU CODIGO
};

window.onload = main;