// Que3. Create an object Calculator with methods add, subtract, multiply and divide. Demonstrate the usage of this within these methods such that method chaining of add, subtract. And divide is possible.

// Sol:
// Calculator object
const Calculator = {
    // Initialize the result property
    result: 0,
  
    // Method to add a number
    add: function (value) {
      this.result += value;
      return this; // Return this for method chaining
    },
  
    // Method to subtract a number
    subtract: function (value) {
      this.result -= value;
      return this; // Return this for method chaining
    },
  
    // Method to multiply by a number
    multiply: function (value) {
      this.result *= value;
      return this; // Return this for method chaining
    },
  
    // Method to divide by a number
    divide: function (value) {
      // Check for division by zero
      if (value !== 0) {
        this.result /= value;
      } else {
        console.log('Error: Division by zero');
      }
      return this; // Return this for method chaining
    },
  
    // Method to reset the calculator
    reset: function () {
      this.result = 0;
      return this; // Return this for method chaining
    },
  
    // Method to get the current result
    getResult: function () {
      console.log(`Result: ${this.result}`);
      return this; // Return this for method chaining
    }
  };
  
  // Example usage with method chaining
  Calculator
    .add(10)         // 0 + 10 = 10
    .subtract(2)     // 10 - 2 = 8
    .multiply(5)     // 8 * 5 = 40
    .divide(4)       // 40 / 4 = 10
    .getResult()     // Output: Result: 10
    .reset()         // Reset result to 0
    .add(20)         // 0 + 20 = 20
    .subtract(5)     // 20 - 5 = 15
    .getResult();    // Output: Result: 15
  
