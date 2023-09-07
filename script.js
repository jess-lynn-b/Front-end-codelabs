console.log(navigator.userAgentData.brands);

//  global scope
let game = 'Sonic'; // global Variable

 console.log (game);

 function title () {
    console.log('${game}');
 }

 title();

 if (true) {
  console.log('${game}');
 }
 
//  local scope

function a(){
  let game = 'Sonic'; //Functional scope 
  console.log(game); 
}

a();
 if (true){
  let game = 'Mario'; 
  console.log(game);
 }

if (true) {
  let greeting = 'hello';
}
console.log(greeting);


// Tasks after video//
// Task 1

  let firstName = 'John';
  let lastName = 'Smith';
  let age = '25';
  let sentence = firstName +" " + lastName + "is" + age + "years old.";
  console.log(sentence);