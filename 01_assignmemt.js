// Que1 Create an object construction Person that takes name and age as a parameters and initialise them. Also add a method say hello to greet the person.

// Sol:
// Constructor function for Person
function Person(name, age) {
    // Initialize properties
    this.name = name;
    this.age = age;
  
    // Method to greet the person
    this.sayHello = function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
  }
  
  // Create a new Person object
  const person1 = new Person('Alice', 30);
  
  // Call the sayHello method to greet the person
  person1.sayHello();
  