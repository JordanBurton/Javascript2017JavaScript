$(document).ready(function(){
	console.log('working')

	$(searchName).on('click', function(){

		$(searchResult).html("")

		$.ajax({
			type: 'GET',
			url: 'champions.json',
		}).done(function(champions){
			console.log(champions.data["Jax"].title)
			let search = $(searchRes).val();
			console.log(champions.data[search].title)
			$(searchRes).val("");
			$(searchResult).append(search + ": " + champions.data[search].title);
			$(names).append('<tr><td>'+ search + ": " + champions.data[search].title + '</td></tr>')
		})
	});

});	
