//Loops

/*
	lvc = 

	for Loop
	-------------------------

	
	while Loop
	-------------------------
	
	for in Loop
	-------------------------
	
	do while Loop
	-------------------------
	Runs at least once

*/

//initialize var; have boolien expression;
for (var i = 0; i < 10; i = i + 1) {
	console.log(i)
 }

 console.log("\n")

 //using a for loop, count to 20 by 2's
 for (var l = 0; l < 21; l = l + 2) {
	console.log(l)
 }

 console.log("\n")

 var name = "Jordan"

 //best practice
 for (var i = 0; i < name.length; i++){
 	console.log(name[i])
 }

console.log("\n")

//initialize variable
var j = 0
//boolean expression in ()
 while ( j < 5 ) {
 	//step through the loop
 	j = j + 1 // j++
 	console.log(j)
 }

 console.log("\n")
 //challenge  create a while loop that counts to 100 by 10's

 var h = 0

 while (h < 100) {
 	h = h + 10;
 	console.log(h)
 }

/*
 while(true){
 	console.log("runs once")
 	return false;
 }
 */

console.log("\n")

 var studentName = "yeet"
 var capSN = ""
//     lcv       collection
 for ( var l in studentName) {
 	if(l == 0){
 		capSN = studentName[l].toUpperCase();
 	} else {
 		capSN += studentName[l]
 	}
 	//for in loop automatically reads a collection
 }

console.log(capSN)