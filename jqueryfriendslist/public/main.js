$(document).ready(function(){
	let names;
	$.ajax({
		type: 'GET',
		url: 'http://rest.learncode.academy/api/learncode/javascriptfall',
	}).done(function(data){
		names = data;
		console.log(data);
		console.log(names);
	})
	console.log('hello');
	console.log(names);

	$(submitButton).click(function(){
		console.log(inputName.value)
		console.log(inputEmail.value)
		let person = {
			name: null,
			email: null,
		}
		person.name = inputName.value
		person.email = inputEmail.value
		console.log(person)

		$.ajax({
			type: 'POST',
			url: 'http://rest.learncode.academy/api/learncode/javascriptfall',
			data: person,
		})
	})
})