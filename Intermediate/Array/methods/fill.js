// NOTE: The fill() method of Array instances changes all elements within a
// range of indices in an array to a static value. It returns the modified array.

const arr1 = [1, 2, 3, 4, 5];

// Fill with 0 from position 2 until position 4
console.log("Fill with 0 from position 2 until position 4:", arr1.fill(0, 2, 4));

// Fil with 5 from position 1
console.log("Fill with 5 from position 1: ", arr1.fill(5, 1));

// Fill with 6
console.log("Fill with 6: ", arr1.fill(6));
