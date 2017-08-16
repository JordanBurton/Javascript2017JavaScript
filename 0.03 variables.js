// Variables

var name;

name = "Jordan";  //one equal sign is an assignment operator

console.log(typeof(name))
console.log(name)

var lastName = "Burton";	//shorter version of the above

//Can use any of the DataTypes on these because it is a string
console.log(name.length)
console.log(name.toUpperCase())

//Challenge
var firstName = "Jordan"
var lastName = "Burton"
var space = " "
var fullName = firstName + space + lastName

console.log(fullName)

// Java reads code line-by-line, so if 2 variables have the same name, the output can be different depending on code structure
lastName = "yeet" // if you don't put "var" in front of a multi-used variable, it will swap out the variable's value.
//the extra "var's" only slow down the code

console.log(lastName)

// Variable data types

// Variable scopes