// NOTE:The entries method of Array instances returns a new array iterator object
// that contains the key/value pairs for each index in the array.

const array1 = ["a", "b", "c"];

const iterator1 = array1.entries();

console.log(iterator1.next().value);

console.log(iterator1.next().value);


// Iteratign with index and element
const names = ["akif", "fazil", "guven"];
for (const [index, element] of names.entries()) {
  console.log(index, element);
}

// Using a for ... of loop
const strings = ["a", "b", "c"];
const stringsEntries = strings.entries();
for (const element of stringsEntries) {
  console.log(element);
}

// Iterating sparse arrays
// NOTE: entries will visit empty slots as if they are undefined.

for (const element of [, "a"].entries()) {
  console.log(element);
}
