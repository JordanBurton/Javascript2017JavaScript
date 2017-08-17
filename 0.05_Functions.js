// Functions
function greeting() {
	console.log("good morning")
}
//Paranthesis invoke our function so that it runs the code inside the block.  Won't run if there are no paranthesis
greeting()


console.log("\n")


//Challenge, Create a function that says "Day 4 feeling great!" then call that function
function day4() {
	console.log("Day 4 feeling great!")
}
day4()

console.log("\n")

//Functions with parameters
function greeting2(name, age, height){
	console.log("Time to start coding" + " " + name)
}
greeting2("Jordan", 20)

console.log("\n")

//Functions can be used as a placeholder/template for input information later on
function sum(sum1, sum2){
	console.log(sum1 + sum2)
}
sum(10,5)

console.log("\n")

//Scope
//var's within functions stay within functions, but var's within if statements can be called from outside its curly brackets
var fname = "Jordan"	//This var can be called within any function because it's scope is on a global scale
function hello(fname) {
	lname = "Burton"
	console.log(fname + " " + lname)
}
//console.log(lname)	//This console.log won't return the lname from the function above because the lname var is within the scope of that function only
hello("Jordan")

if ( 1 == 1){
	// "let" is a replacement for "var", but it stays local to its code block
	let sum = 1 + 1
	console.log(sum)
}
console.log(sum)

console.log("\n")

//Challenge: Create a function called capitalize() and use the for loop we created ysterday to
//capitalize names

function capitalize(yourName){
 	var capSN = ""
 	for (var l in yourName) {
 		if(l == 0){
 			capSN = yourName[l].toUpperCase();
 		} else {
 			capSN += yourName[l]
 		}
 		//return capSN
 		//return stops the program from continuing, so it will let this function go through once, then stop it and only print out the first letter
 	}
 	return capSN //will print "undefined", return capSN will print the string that "capSN" holds
}
var name = "jordan"
capitalize(name)

//Void Functions

//Functions with parameters