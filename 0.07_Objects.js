let food = {
	pies: ['Pecan','Blueberry','Cherry','Key Lime'],
	piesNew: [],

	newPies: function(){
		this.pies.forEach(function(flavors){
			food.piesNew.push(flavors + " pie")
		})
	},

	pieEnd: function(){
		return food.pies.forEach(function(getPies){
			console.log(getPies + " pie")
		})
	},

	getPies: function(){
		return this.pies // "this" is relative to it's scope
	},
	//can assign an object multiple properties, divided by a ","
	//functions within objects are refered to as methods

}
console.log(food.pies[0])
//the "." operator looks inside an object
//Challenge: iterate over the pie array and print out each pie, and add "pie" to them
//using the forEach() method
//"iterate" means a collection of data. Arrays, strings. etc
console.log(food.getPies())
food.pieEnd()
console.log("\n")

food.newPies()

console.log("\n")

console.log(food.piesNew)
/*
food.pies.forEach(function(pieFlavor){
	console.log(pieFlavor + " " + "Pie")
})
*/

//Challeng: Create a method inside of the object food that appends 'pie'