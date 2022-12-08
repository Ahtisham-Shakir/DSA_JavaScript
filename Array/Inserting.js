// Inserting element at any position in the array
let arr = [10, 20, 40, 50, 70, 80];
let position = 2;
let value = 30;
console.log("Array before inserting", arr);
for (let i = arr.length; i >= position; i--) {
  if (i > position) {
    arr[i] = arr[i - 1];
  } else if (i === position) {
    arr[position] = value;
  }
}
console.log("Array after inserting", arr);

// inserting elements using built-in functions
// at any position
arr.splice(5, 0, 60);
console.log("Array after inserting using built-in function", arr);

// at start
arr.unshift(0);
console.log("Array after inserting at start using built-in function", arr);

// at end
arr.push(90);
console.log("Array after inserting at end using built-in function", arr);
