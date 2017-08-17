
let students = ['Thomas','Madyson','Brandon','Leon', 23 , true , ['Jackson','Perry']]
//square brackets indicate that an array is being created
//an array can hold many different data types (strings, numbers, booleans, objects, more arrays)

console.log(typeof(students));

console.log(students[2]);

//Grab the nested array out of the students array and grab perry then print to the console
let array2 = students[6]
console.log("Hello" + " " + array2[1])
//shorter version...
console.log("Hello" + " " + students[6][1])
//the "," sticks strings together in a line, but "+" concatinates multiple strings to form 1 string
//shouldn't use "," at all, but if need be, ONLY use them within a console.log statement
console.log("\n")
let arrOfFood = ['Quesadilla','Pecan Pie','Potato','CheeseCake','Shrimp Pasta']

for (let f of arrOfFood) { //assigning each of the strings in arrOfFood the "f" variable
	//  "of vs in"   "of" prints out the value of the string instead of the index(in)
	console.log(f)
}

console.log("\n")

arrOfFood.push("NY Style Pizza"); //Appends an items at the end of the array

arrOfFood.splice(1 /*Position of where you want the item*/,2 /*How many to cut from there on*/, 'Blueberry Pie' /*What you are replacing it with*/)
arrOfFood.splice(2, 0, 'Hamburger')
arrOfFood.splice(4, 1, 'Cookies')
arrOfFood.pop() //Gets rid of the last item in the array.  Opposite of push

/*for(let foodItem of arrOfFood){
	console.log(foodItem)
}*/


arrOfFood.forEach(function(foodItem, banana, a){
	//				spot 1 = value	 spot 2 = index   spot 3 = array
	console.log(banana)
	console.log(foodItem)
	console.log(a)
})
//forEach passes each item of the array into the function,  and this function prints each item
//forEach goes over each item in the array.  small version of a loop for arrays