// Exercise 1 'Understand the "this" keyword
console.log("'this' in Global Scope:", this); // 'this' in Global Scope
const classroom={
  name: 'Team One',
  students: ['Taylor','Brooklynn','Corbin'],
  printStudents: function (){
    console.log(" 'this' in Implicit Scope (Function Dec):", this.students);
  },
printStudentsES6: ()=> console.log("'this' in Implicit Scope (Function Dec):", this.students),
};
classroom.printStudents();
classroom.printStudentsES6();

//Exercise 2 'OOP' creating interacting with classes

const person = {
  name: 'Brooklynn',
  age: 13,
  greet(){
    console.log("Hello, I am " + this.name+".");
  },
  introduce: function(){
    console.log("Allow me to introduce myself. I'm" +" "+ this.name +" "+"and I am"+" " +this.age+" "+ "years old.");
  }
};
person.greet();// Hello, I am Brooklynn.
person.introduce(); // Allow me to introduce myself. I'm Brooklynn and I am 13 years old.

// Exercise 3 'understanding the role of the constructor methods within classes'
function Person(name) {
  this.name = name;
  this.age = Number;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name} and I'm ${this.age} years old.`);
  };
}
const brook = new Person ('Brooklynn');
brook.name;
brook.age = 12;
brook.introduceSelf();// Hi! I'm Brooklynn and I'm 12 years old.

const Corbin = new Person('Corbin');
Corbin.name;
Corbin.age = 6;
Corbin.introduceSelf(); // Hi! I'm Corbin and I'm 6 years old.

// Exercise 4 ' Familiarize with static methods in classes'

class People {
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  speak(phrase) {
    console.log(`${this.name} says ${phrase}`);
  }
  // Can't be called from instance only from class itself
  info(){
    return `${this.name} is ${this.age} years old`;
  }
}

const taylor = new People('Taylor', 34);
taylor.speak('This is a person class.');
console.log(taylor); // Taylor says This is a person class.
console.log(Object.getOwnPropertyNames(taylor));

const brooklynn = new People ('Brooklynn', 12);
brooklynn.speak('I love cheer.');
console.log(brooklynn); //Brooklynn says I love cheer.
console.log(Object.getOwnPropertyNames(brooklynn));

console.log(taylor.info()); //Taylor is 34 years old
console.log(brooklynn.info()); //Brooklynn is 12 years old

// Exercise 5 Implement getters and setters for class properties

class persons {
  #name;
  #age;

    constructor (name, age){
      this.#name = name;
      this.#age = age;
    }

    get nameAndAge(){
      return this.#name + ' ' + this.#age;
    }

    set age(age) {
      if (age < 0){
        throw new Error('Age cannot be negative!!!'); // will not allow the age to be negative
      }
      this.#age = age;
    }
}

const person1 = new persons('Wessley', 28);
console.log(person1.nameAndAge); // Wessley 28


// Exercise 6 Understand and implement private fields in classes




//Exercise 7 Integrate multiple concepts: classes, methods, and private fields

// Library
class Library {
  constructor(){
      this.books = [];
  }
  addBook(book) {
    this.books.push(book);
  }

  removeBook(ISBN) {
    this.books = this.books.filter((book) => book.ISBN !== ISBN);
}
  listBooks(){
      this.books.forEach((book) => {
          console.log(`Title: ${book.title}`);
          console.log(`Author: ${book.author}`);
          console.log(`Year Published: ${book.yearPublished}`);
          console.log(`ISBN: ${book.ISBN}`);
      });
  }

    orderByYear(){
      this.books.sort((a,b) => a.yearPublished - b.yearPublished);
    }

    orderByTitle(){
      this.books.sort((a,b) => a.title - b.title);
    }

    orderByTitleISBN(){
      this.books.sort((a,b) => a.ISBN - b.ISBN);
    }

    static welcomeMessage(){
      console.log("Welcome to the library.");
    }
  }
  class Book {
      static #ISBNHandler = 100;
      title;
      author;
      yearPublished;
      #ISBN;
      constructor (title,author, yearPublished) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
        this.#ISBN = Book.#ISBNHandler++;
      }
      get ISBN (){
        return this.#ISBN;
      }

      updateBookPage(pageNumber, pageText){
        for (const page of this.pages){
          if (page.pageNumber == pageNumber){
            page.pageText = pageText;
            return;
          }
        }
      }
    }


const book1 = new Book(
      "The Cat in the Hat",
      "Dr. Seuss", 
      1957
);
const book2 = new Book(
    "Oh,the Places You'll Go!",
    "Dr. Seuss", 
    1990
 );
const book3 = new Book(
       "Who was Walt Disney?", "Whitney Stewart",
       2009
);
const book4 = new Book(
      "What was the Titanic?",
      "Stephanie Sabol",
      2018
);
const book5 = new Book(
      "The Official Disney Parks Cookbook 101 Magical Recipes from the Delicious Disney Vault", 
      "Pam Brandon ",
      2023
);
const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

console.log("All of the books in the library:");
library.listBooks();

library.removeBook("101");

console.log("Books in the library after removal:");
library.listBooks();

// Exercise 8 create a class student with properties name and grades

class Student {
  name;
  grades = [];
  constructor (name, grades){
      this.name = name;
      this.grades = grades || [];
  }
  addGrades (grade) {
      this.grades.push(grade);
  }
  findAverage() {
      return this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length;
  }
}

const myStudent = new Student("Sarah");
this.name = "Sarah";
myStudent.addGrades(98);
myStudent.addGrades(74);
myStudent.addGrades(87);
myStudent.addGrades(89);
myStudent.addGrades(99);
myStudent.addGrades(90);
console.log (this.name +" " + "has an average grade of "+ myStudent.findAverage());

const myStudent1 = new Student ("Noah");
this.name1 = "Noah";
myStudent1.addGrades(96);
myStudent1.addGrades(99);
myStudent1.addGrades(90);
myStudent1.addGrades(92);
myStudent1.addGrades(88);
myStudent1.addGrades(78);
console.log(this.name1 + " " + "has an average grade of " + myStudent1.findAverage());
