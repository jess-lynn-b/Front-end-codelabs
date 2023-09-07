//Exercise 1
function outerFunction() {
	let outerVar = "I'm outside!";

	function innerFunction() {
		let innerVar = "I'm inside!";
		console.log(outerVar); // yes access the outerVar
		console.log(innerVar); // yes access the innerVar
	}

	innerFunction();
}

outerFunction();

//Exercise 2 unable to call bc it hasnt been declared

function mainFunction (type, year) {
  let mainFunction = 'Jeep, 2022';
  console.log(mainFunction);
}
mainFunction();


// Exercise 3
function counter (){
  let count = 0;

  return {
    increment: function (){
      count++ ;
      return count;
    },

    decrement: function (){
      count --;
      return count;
    },
     getCount: function () {
      return counter;
    }
      
  }
}
let myCounter = counter();
console.log("My count is initially: " + myCounter.getCount());
myCounter.increment();
console.log("My count is now..." + myCounter.getCount());

//Exercise 4

let firstName = "Jess";

function modifyGlobal(){
  let firstName = "Amy";
  console.log("My name is" + firstName);
}

function localScopeTest() {
 const firstName = "Amy";
 console.log("My name is" + firstName);
}
console.log("My name is really..." + firstName);

// Exercise 5

function functionFactory(param) {
  // Return a function that makes use of 'param'
}

// Create an instance of the inner function by invoking functionFactory with a parameter