// No.1
var todo1 = {
  description: "TODO 1",
  state: "NEW"
};

// No.2
var todo2 = Object.create(todo1);


// No.3
var Todo = function(desc, state) {
  this.description = desc;
  this.state = state;
}

var todo3 = new Todo("TODO 3", "NEW");

// No.4
// console.log(Object.getPrototypeOf(todo1));
// console.log(Object.getPrototypeOf(todo2));
// console.log(Object.getPrototypeOf(todo3));


// Primitive types

// Function
// No.1 Create a function

function sayHelloTo1(name) {
  console.log("Hello1 " + name);
}

var sayHelloTo2 = function(name) {
  console.log("Hello2 " + name);
}

var sayHelloTo3 = function() {
  console.log("Hello3 " + this.name);
}

var Person = function(name, age) {
  this.name = name;
  this.age = age;
}

// No2. invoke a function
console.log(sayHelloTo1("John"));

var person = {name: "John"};
console.log(sayHelloTo2.apply(person));

// what happen if you call Person();?

// No3. hidden parameters
var myAdd = function(a, b, c) {
  console.log(arguments);
}


// closure
// register event handler

// let nodes = document.getElementsByClassName('node');
// let count = nodes.length;

// using let, good
// for (let i = 0; i < count; i++) {
//   nodes[i].onclick = function (e) {alert(i);}
// }

// using var, unexpected
let nodes = document.getElementsByClassName('node');
let count = nodes.length;
for (var i = 0; i < count; i++) {
  nodes[i].onclick = function (e) {alert(i);}
}


// babel's compiled output using let
// var nodes = document.getElementsByClassName('node');
// var count = nodes.length;

// function _loop(i) {
//   nodes[i].onclick = function (e) {
//     alert(i);
//   };
// };

// for (var i = 0; i < count; i++) {
//   _loop(i);
// }

//
