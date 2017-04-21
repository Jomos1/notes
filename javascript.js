/*block comment*/
//comment

//http://slides.com/ifang/javascriptbasics#/0/16 <---IMPORTANT

//string
var myName = "Jomari";
//interger
var myAge = 10;
// boolean type (truth or false)
var booleanExample = true;
//unassigned
undefined
//Not a Number
NaN
//array
var array = ['one', 2, 'seven', 'lol', false];
//objects

//functions is an execute statement
function (){

}
//naming function
function nameOfFunction (){
console.log('hello me function')
}
//invoking function
nameOfFunction();
//parameters
function hi (a, b) {
	console.log(a + b);
}

hi(30,50)
//return values
function createGreeting (name,age){
	if (age < 32){
		console.log('hello ' + name);
		return 'hello ' + name
	}else{
		console.log('hello Mr. ' + name);
		return 'hello Mr. ' + name
	}
}
createGreeting('Jomari', 16);
//if lets all conditions be met (think like skyrim choices)
// else if only lets one condition be met one at a time. (i.e. think mass effect choices)
//= vs ==
//= is an assignment
//== checks for equality
//== is a boolean operator
