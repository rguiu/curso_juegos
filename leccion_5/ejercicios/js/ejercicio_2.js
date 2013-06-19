var repo_url = "/rguiu/curso_juegos"

var game_request = new XMLHttpRequest();
// var canvas = null;
// var context = null;


parseJSON = function (json_data) {
    parsedJSON = JSON.parse(json_data);
    console.log(parsedJSON[0].commit.message);
    console.log(parsedJSON[0]);
};

main = function() {
	update_ajax();
	// canvas    = document.getElementById('canvas');
	// context   = canvas.getContext('2d');
	// canvas.width  = window.innerWidth;
	// canvas.height = window.innerHeight - 200;

};

update_ajax = function() {
	// para abrir una conexion pasamos los siguientes argumentos
// 1. el metodo HTTP a usar, en este caso GET
// 2. el recurso a cargar
// 3. un booleano para describir la llamada como sincrona o asincrona
	game_request.open("GET","https://api.github.com/repos"+repo_url+"/commits", true);
    game_request.onload = function() {return parseJSON(this.responseText)};
	game_request.send();
}

paint = function(commits) {
	var y = 5;
	for(var i = 0;i < commits.length;i++) {
		var img = new Img
		context.beginPath();
	    context.drawImage(x,y, 30, 45);
	    context.fillStyle = '#dddddd';
	    context.fill();
	    context.fillStyle = '#000000';
	    context.lineWidth = 1;
	    context.strokeStyle = 'black';
	    context.stroke();
	    context.restore();

	    context.font = "bold 15px Arial";
	    context.fillText(rank, x+2, y+26);
	    context.restore();
	}
};

window.onload = main;