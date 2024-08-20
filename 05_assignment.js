// Que5 Create a simple polyfill for the Array.includes method by the name of method customIncludes.

// Sol:

// Custom polyfill for Array.includes
if (!Array.prototype.customIncludes) {
    Array.prototype.customIncludes = function (element, fromIndex = 0) {
      // Handle negative fromIndex
      if (fromIndex < 0) {
        fromIndex = this.length + fromIndex;
        if (fromIndex < 0) fromIndex = 0;
      }
  
      // Iterate through the array starting from fromIndex
      for (let i = fromIndex; i < this.length; i++) {
        // Check if the element is found
        if (this[i] === element) {
          return true;
        }
      }
      return false;
    };
  }
  
  // Example usage:
  const arr = [1, 2, 3, 4, 5];
  
  console.log(arr.customIncludes(3));  // Output: true
  console.log(arr.customIncludes(6));  // Output: false
  console.log(arr.customIncludes(5, 3));  // Output: true
  console.log(arr.customIncludes(2, -3));  // Output: false
  
