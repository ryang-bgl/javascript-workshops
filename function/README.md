# Object
## Create an object
  - Object.create
  - Object literal
  - New operator
## Reference a member of an object
  - Dot notation
  - bracket notation

# Function
## Create a function
  - function func_name(p1, p2) { <body>}
  - var func_name = function(p1, p2) { <body> }
## Invoke a function
  - myObj.func()
  - func.apply(myObj)
  - invoke with new operator
## Hidden paramers
  - arguments
  - this
## Declare variables: Let vs Var
  - let is block scoped
  - var is function scoped
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
