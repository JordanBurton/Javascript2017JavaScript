table1Contents = document.getElementById("planetContents")

$(document).ready(function(){
	$.ajax({
		type: 'GET',
		url: 'http://swapi.co/api/planets/',
	}).done(function(data){
		planets = data.results
		for (p in planets) {
			let tr = document.createElement('tr');
			let td = document.createElement('td');

			td.innerHTML = planets[p].name;
			$(planetTable).append(tr).append(td);
			console.log(planets[p].name);
		}
	});
});

