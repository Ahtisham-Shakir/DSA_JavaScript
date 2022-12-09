// Deleting element from any position in the array

let data = [10, 20, 30, 30, 40, 50];
let position = 3;

console.log("Array before deletion ", data);
for (let i = position; i < data.length - 1; i++) {
  data[i] = data[i + 1];
}
data.length = data.length - 1;
console.log("Array after deletion ", data);

// Deleting element from start using built-in function
data.shift();
console.log("deleting from start ", data);

// Deleting element from end using built-in function
data.pop();
console.log("deleting from end ", data);

// Deleting from any position using built-in function
// data.splice(2,1)
