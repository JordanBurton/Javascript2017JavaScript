let input = document.getElementById("input")
console.log(input);
let output = document.getElementById("output")
console.log(output);
let ulist = document.getElementById("friendsList")
let newName = "";

function capitalize() {
	for (let l in input.value){
		if (l == 0){
			newName = input.value[l].toUpperCase()
		} else {
			newName += input.value[l].toLowerCase()
		}
	}

	output.innerHTML = newName;
	addItem();
}
//JQuery method
//$('#input').keypress(function(event){
//	if(event.keyCode == 13){
//		$('#buttonClick').click();
//	}
//})
//JavaScript method
document.onkeypress = function(e){
	if(e.keyCode === 13) {
		capitalize();
		input.value = "";
	}
}

function addItem() {
	let li = document.createElement('li');
	let text = li.innerHTML = newName;
	ulist.appendChild(li);
}