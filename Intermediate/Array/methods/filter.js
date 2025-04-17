// NOTE: The filter() method of Array instances creates a shallow copy of a
// portion of a given array, filtered down to just the elements from the given
// array that pass the test implemented by the provided function.


const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);
console.log("These words length is bigger than 6: ", result);


// Filtering out all small values
function isBigEnough(value) {
  return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log("Items that bigger thang 10: ", filtered);

// Find all prime numbers in an array
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log("All prime numbers are: ", array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

// Filtering invalid entries from JSON
const arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: "undefined" },
];

let invalidEntries = 0;

function filterByID(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true;
  }
  invalidEntries++;
  return false;
}

const arrByID = arr.filter(filterByID);

console.log("Filtered Array\n", arrByID);
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log("Number of Invalid Entries =", invalidEntries);
// Number of Invalid Entries = 5

// Searching in array
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']



