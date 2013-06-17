// Creamos 
var game_request = new XMLHttpRequest();

parseJSON = function (json_data) {
    parsedJSON = JSON.parse(json_data);
    console.log(parsedJSON[0].commit.message);
};

main = function() {
	update_ajax();
};

update_ajax = function() {
	// para abrir una conexion pasamos los siguientes argumentos
// 1. el metodo HTTP a usar, en este caso GET
// 2. el recurso a cargar
// 3. un booleano para describir la llamada como sincrona o asincrona
	game_request.open("GET","https://api.github.com/repos/rguiu/curso_juegos/commits", true);
    game_request.onload = function() {return parseJSON(this.responseText)};
	game_request.send();
}


window.onload = main;