// Data types

// Strings

"What a wonderful world" //double quote string
'Hello you guys' //single quote string

console.log("it's a wonderful day".toUpperCase()) // Wrap single quotes in a double quote, and vice versa

console.log('Couldn\'t things get any better'.length) // Can also use the "\" key to omit the job of a particular function.

console.log("Jordan".toLowerCase())

console.log("Jay Jackson"[0].toLowerCase() + "Jay Jackson"[4]) // + is concatication

console.log("Home"[0] + "Home"[1] + "Home"[2].toUpperCase() + "Home"[3])

console.log(typeof("Amber"))
console.log("Amber")	

// Numbers

console.log(typeof(2))

console.log(5*8/2) // numbers can be used for math things
console.log(20%6) // % divides the numbers, then shows you the remainer number

// Booleans = ture/false values

console.log(true) //"true" and "false" are reserved keywords in JavaScript

/*

Conditional operators

<	: less than
>	: greater than
<=	: less than or equal to
>=	: greater than or equal to
==	: equal to
===	: strictly equal to
!	: not -------- Also refered to as "Bang"
!=	: not equal to

*/

console.log(4+6 == 5*2)

// "\n" generates a new blank line

console.log("\n")
console.log("\n")
console.log("\n")
console.log("\n")
console.log("\n")

console.log(4 < 5)
console.log("Test" + "ego") //Two strings can't be compared to each other on their own
console.log(1 == "1") //more leniant equals to
console.log(1 ==="1") //very strict equals to