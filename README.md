# Object
## Create an object
  - Object.create
  - Object literal
  - New operator

```javascript
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

```
## Reference a member of an object
  - Dot notation
  - bracket notation

```javascript
console.log(todo1.description);
console.log(todo1['description']);
```

## Prototype of object

```javascript
console.log(Object.getPrototypeOf(todo1));
```

# Primitive types
  - Boolean
  - Null
  - Undefined
  - Number (double)
  - String
  - Symbol (new in ECMAScript 6)

# Function
## Create a function
  - function func_name(p1, p2) { <body>}
  - var func_name = function(p1, p2) { <body> }

```javascript
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
```

## Invoke a function
  - myObj.func()
  - func.apply(myObj)
  - invoke with new operator

```javascript
console.log(sayHelloTo1("John"));

var person = {name: "John"};
console.log(sayHelloTo2.apply(person));

// what happen if you call Person();?
```

## Hidden paramers
  - arguments
  - this
```javascript
var myAdd = function(a, b, c) {
  console.log(arguments);
}
```
## Declare variables: Let vs Var
  - let is block scoped
  - var is function scoped

```javascript
// function scope and name hoist
function varVsLet() {
  console.log(var1);
  
  var condition = true;
  if (condition) {
    var var1 = 1;
    console.log(var1);
    console.log(var2);
  }
}
```
## Closure
Function has access to its parent's scope. It is more interesting when inner function has longer lifetime than the parent
```javascript
var person = function (name) {
  let person_name  = name;
  return {
    get_name: function () {
      return person_name;
    }
  };
}('Hellen');
```
# Inheritance
## Goal of inheritance
  - reuse
  - if two things are similar, you only need to specify the differene
## Inheritance
In classical languages, objects are instances of class, and a class can inherit from another class. In javascript, an object
inherit directly from another object.

```javascript
todo1.get_state = function() {return this.state};

console.log(todo2.get_state());
```

```javascript
Person.prototype.speak = function(content) {
  return "I speak " + content
}

var p1 = new Person('John');
console.log(p1.speak());
```
