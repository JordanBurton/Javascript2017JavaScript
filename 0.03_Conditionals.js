// Conditionals

/*

Chaining conditional operators
------------------------------
&&
||


*/
var name = "jordan"

if ( "Jordan" == name ) {

	console.log("your name is" + " " + name)

} else {

	console.log("what is your name then?")

}

console.log("\n")

name = "jordan"

if (name[0] == name[0].toUpperCase()) {
	console.log("You have good grammar" + " " + name)
} else {
	console.log("Let me fix that for you..." + " " + name[0].toUpperCase() + name.substring(1, 6))
}

console.log("\n")

var age = 8

if (age >= 18) {
	console.log("Vote")
} else if (age >= 16) {
	console.log("Drinking")
} else if (age >= 12) {
	console.log("Car Rates")
} else {
	console.log("nothing")
}

