var canvas = null;
var context = null;

var sprite = null;

var counter = 1;

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

	sprite = new Image();
	sprite.onload = onImageLoad;
	sprite.src = "imagenes/person-sprite.png"
};

var onImageLoad = function(){
	setInterval(animate,1000/25);
	//animate();
	console.log("Imagen cargada.");
};

var animate = function() {
	context.clearRect(0,0,canvas.width, canvas.height);
	// Aqui tienes que empezar a pintar
	// 1. Pinta la imagen del frame correspondiente al indice counter
	// 2. Cambia el contador al siguiente frame. Ten en cuenta que van del 1 al 16

	var image_number = "";
	if (counter<10) {
		image_number = "0"+counter;
	} else {
		image_number = ""+counter;
	}
	var image_name = "person"+image_number+".png";
	// AQUI EMPIEZA TU CODIGO



	// AQUI TERMINA TU CODIGO
}

var imagenes_data = {"frames": {
	"person01.png":
	{
		"frame": {"x":2,"y":2,"w":32,"h":80},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":32,"h":80},
		"sourceSize": {"w":32,"h":80}
	},
	"person02.png":
	{
		"frame": {"x":36,"y":2,"w":32,"h":80},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":32,"h":80},
		"sourceSize": {"w":32,"h":80}
	},
	"person03.png":
	{
		"frame": {"x":70,"y":2,"w":32,"h":80},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":32,"h":80},
		"sourceSize": {"w":32,"h":80}
	},
	"person04.png":
	{
		"frame": {"x":104,"y":2,"w":32,"h":80},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":32,"h":80},
		"sourceSize": {"w":32,"h":80}
	},
	"person05.png":
	{
		"frame": {"x":138,"y":2,"w":32,"h":80},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":32,"h":80},
		"sourceSize": {"w":32,"h":80}
	},
	"person06.png":
	{
		"frame": {"x":104,"y":2,"w":32,"h":80},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":32,"h":80},
		"sourceSize": {"w":32,"h":80}
	},
	"person07.png":
	{
		"frame": {"x":70,"y":2,"w":32,"h":80},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":32,"h":80},
		"sourceSize": {"w":32,"h":80}
	},
	"person08.png":
	{
		"frame": {"x":36,"y":2,"w":32,"h":80},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":32,"h":80},
		"sourceSize": {"w":32,"h":80}
	},
	"person09.png":
	{
		"frame": {"x":172,"y":2,"w":32,"h":80},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":32,"h":80},
		"sourceSize": {"w":32,"h":80}
	},
	"person10.png":
	{
		"frame": {"x":206,"y":2,"w":32,"h":80},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":32,"h":80},
		"sourceSize": {"w":32,"h":80}
	},
	"person11.png":
	{
		"frame": {"x":2,"y":84,"w":32,"h":80},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":32,"h":80},
		"sourceSize": {"w":32,"h":80}
	},
	"person12.png":
	{
		"frame": {"x":36,"y":84,"w":32,"h":80},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":32,"h":80},
		"sourceSize": {"w":32,"h":80}
	},
	"person13.png":
	{
		"frame": {"x":70,"y":84,"w":32,"h":80},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":32,"h":80},
		"sourceSize": {"w":32,"h":80}
	},
	"person14.png":
	{
		"frame": {"x":36,"y":84,"w":32,"h":80},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":32,"h":80},
		"sourceSize": {"w":32,"h":80}
	},
	"person15.png":
	{
		"frame": {"x":2,"y":84,"w":32,"h":80},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":32,"h":80},
		"sourceSize": {"w":32,"h":80}
	},
	"person16.png":
	{
		"frame": {"x":206,"y":2,"w":32,"h":80},
		"rotated": false,
		"trimmed": false,
		"spriteSourceSize": {"x":0,"y":0,"w":32,"h":80},
		"sourceSize": {"w":32,"h":80}
	}},
	"meta": {
		"app": "http://www.codeandweb.com/texturepacker ",
		"version": "1.0",
		"image": "person-sprite.png",
		"format": "RGBA8888",
		"size": {"w":256,"h":256},
		"scale": "1",
		"smartupdate": "$TexturePacker:SmartUpdate:d1a7b6346bed00725e71ecd2468f4747$"
	}
};

window.onload = main;