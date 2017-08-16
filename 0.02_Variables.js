var myNumber = 0
myNumber = (myNumber + 10) // += is the shorthand version of this
console.log(myNumber)
myNumber -= 1 // as shown here and below
console.log(myNumber)
myNumber *= 9
console.log(myNumber)
myNumber /= 7
console.log(myNumber)

console.log("\n")

var currentAge = 20
var maxAge = 70
var estAmt = 3

var timeLeft = maxAge - currentAge
var days = timeLeft * 365
var lifetimeAmt = days * estAmt

console.log ("You will eat" + " " + lifetimeAmt + " " + "more hamburgers in your life")
console.log("\n")
//alternatively...
console.log("You will eat" + " " + (((maxAge - currentAge) * 365) * estAmt) + " " + "more hamburgers in your life")