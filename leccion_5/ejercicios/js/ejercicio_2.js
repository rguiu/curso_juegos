var repo_url = "/rguiu/curso_juegos"

var github_request = new XMLHttpRequest();

var noimagen = "http://bit.ly/noimagen";

main = function() {
	update_ajax();
	setInterval(update_ajax, 5000);
};

update_ajax = function() {
	github_request.open("GET","https://api.github.com/repos"+repo_url+
		"/commits", true);
  github_request.onload = function() {
  	display_commits(JSON.parse(this.responseText));
  };
	github_request.send();
}

display_commits = function(commits) {
	var table = document.getElementById("commit_data");
	table.innerHTML = "";
	var tbdy = document.createElement("tbody");
	table.appendChild(tbdy);

	for(var i=0; i<commits.length;i++) {
		var tr=document.createElement("tr");
		var tdimagen = document.createElement("td");
		var avatar = document.createElement("img");
		if (commits[i].author == null) {
			avatar.setAttribute("src", noimagen);
		} else {
			avatar.setAttribute("src", commits[i].author.avatar_url);
		}
		tdimagen.appendChild(avatar);
		tr.appendChild(tdimagen);

		var a = document.createElement("a");
		var linkText = document.createTextNode(commits[i].commit.message);
		a.appendChild(linkText);
		a.href=commits[i].html_url;

		var tdlink = document.createElement("td");
		tdlink.appendChild(a);

		tr.appendChild(tdlink);
		tbdy.appendChild(tr);
	}

};

window.onload = main;