// Exercise 1 understanding the Observer design pattern
/*
console.groupCollapsed('Exercise 1');

class Subject {
	constructor() {
    this.observers = [];
	}

	addObserver(obs){
    this.observers.push(obs);
    console.log(this.observers);
  }
  removeObserver(obs){
    for (let i = 0; i < this.observers.length; i++){
        if(obs == this.observers[i]){
            this.observers.splice(i, 1);
        }
    }
    console.log(this.observers);
  }
  notifyObserver(){
    this.observers.forEach((obs) => obs.update());

    }
  }

class Observer {
    update(){
        console.log('Observer updated!');
    }
  }
  
  const mySubject = new Subject();
  const obs1 = new Observer();
  const obs2 = new Observer();
  const obs3 = new Observer();


  mySubject.addObserver(obs1);
  mySubject.addObserver(obs2);
  mySubject.addObserver(obs3);
  mySubject.notifyObservers();
  mySubject.removeObserver(obs2);
  mySubject.notifyObservers();

  console.groupEnd();
*/
// Exercise 2 understand and apply destruction in JS

const getPerson = () => {
  return {
	'name': 'John',
	'age': 30,
	'city': 'New York',
  'country': 'USA',
	}
}
const {name, age} = getPerson();
console.log(`${name} is ${age} years old!`); 
const {city,country} = getPerson();
console.log(`City of ${city} in the ${country}.`);
// Destructure properties into variables

// Use array to destructure to get second and forth items.
const fruits = ['apple', 'banana', 'cherry', 'date'];
let [,second,, forth] = fruits;
console.log(second);
console.log(forth);

console.groupEnd();

// Exercise 3 Asynchronus Code using Async/Await

async function fetchPosts() {
  const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
try{
  const data = await fetch(url);
  const res = await data.json();
  console.log(res);

} catch (err) {
  console.error('Unable to fulfill this request. Please check the following errors:', err);
}
 
}
fetchPosts();

console.groupEnd();

// Exercise 4 Asynchronous Observer with Destructuring

class Subject {
	constructor() {
		this.observers = [];
	}

	addObserver(obs) {
    this.observers.push(obs);
    console.log(this.observers);
  }

	removeObserver(obs) {
    for(let i = 0; i < this.observers.length; i++){
      if(obs == this.observers[i]){
        this.observers.splice(i, 1);
      }
    }
    console.log(this.observers);
	}

	notifyObservers(data) {
    this.observers.forEach((obs) => {
      obs.update(data);
    });
	}

	async fetchAndNotify() {
		const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
  try {
    const date = await fetch (url);
    const res = await data.json();
    this.notifyObservers(res);

  } catch (err) {
    console.log('Could not process request. Please check the following error(s): ', err);
  }
	}
}

class Observer {
	update(data) {
    try {
      const {title: firstTitle} = data [0];
      console.log(firstTitle);
    } catch (err) {
      console.log('We have an error:', err);
    }
    
	}
}

const mySubject= new Subject();
const obs1 = new Observer();
const obs2 = new Observer();
const obs3 = new Observer();

mySubject.addObserver(obs1);
mySubject.addObserver(obs2);
mySubject.addObserver(obs3);
mySubject.fetchAndNotify();

console.groupEnd();
