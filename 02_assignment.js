// Que2 Create a  constructed Employee that inherits from the Person constructor of  problem 1, add an additional property designation and a method getDetails to display the employee details.

// Sol:
// Person Constructor function (from the previous problem)
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
  }
  
  // Employee Constructor function that inherits from Person
  function Employee(name, age, designation) {
    // Call the Person constructor to initialize name and age properties
    Person.call(this, name, age);
  
    // Initialize the additional property
    this.designation = designation;
  
    // Method to display employee details
    this.getDetails = function() {
      console.log(`Employee Name: ${this.name}, Age: ${this.age}, Designation: ${this.designation}`);
    };
  }
  
  // Inherit the Person prototype
  Employee.prototype = Object.create(Person.prototype);
  
  // Ensure the constructor is set correctly for Employee objects
  Employee.prototype.constructor = Employee;
  
  // Create a new Employee object
  const employee1 = new Employee('John', 35, 'Software Developer');
  
  // Call the methods
  employee1.sayHello();       // Inherited method from Person
  employee1.getDetails();     // Method from Employee
  