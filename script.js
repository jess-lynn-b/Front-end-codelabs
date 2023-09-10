//Exercise 1 Use JavaScript Scope Properly
function outerFunction() {
	let outerVar = "I'm outside!";

	function innerFunction() {
		let innerVar = "I'm inside!";
		console.log(outerVar); //  Can we access outerVar?
    // yes, you can access the outerVar
		console.log(innerVar); // Can we access innerVar?
    // yes, you can access the innerVar
	}

	innerFunction();
}

outerFunction();

//Exercise 2 Apply Hoisting Correctly in a JS Project

console.log(mainFunction (1,'1')); // => false
function mainFunction(value1, value2) {
  return value1 === value2;

}
mainFunction();

// Exercise 3 Implement Closures in JavaScrip
function parentFunction(){
  let kidsName = 'Brooklynn';
  console.log(kidsName);

function childFunction(){
  const age = '12'
  console.log(age);
}
return childFunction();
}
parentFunction();

//Exercise 4 Understand the differences between Local and Global Scope

let firstName = "Jess";

function modifyGlobal(){
  let firstName = "Amy";
  console.log("My name is"+ " " + firstName);
}

function localScopeTest() {
 const firstName = "Sarah";
 console.log("My name is" + " " + firstName);
}
modifyGlobal();
localScopeTest();
console.log("My name is really..." + firstName);

// Exercise 5 Implement a Function Factory using Closures

function functionFactory(param) {
 return function (vacation) {
  return `${vacation} ${param}!`;
 };
}
const magicKingdom = functionFactory('Disney');
console.log(magicKingdom('Where dreams come true'));

//Exercise 6 Examine how Hoisting impacts variable declarations and the different types of variables used

function hoistingTest() {
  // Try printing a variable here
  // console.log(cash);// Cannot access 'cash' before the initalization
    // Declare the variable after the console.log

  let cash = 'the amount';
  console.log(`${cash}`) //the amount displays
}
hoistingTest();

// Exercise 7
....
function setupCounter() {
    // Define a count variable here

    return function() {
        // Increment and print the count
    }
}

// Create a counter instance and invoke it to test
