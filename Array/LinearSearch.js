// Linear Search in Array
let arr = [10, 41, 34, 66, 45, 29, 96, 13];
let item = 34;
let index = undefined;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === item) {
    index = i;
    console.log(`Number is available at ${index} index`);
    break;
  }
}
if (!index) {
  console.log("Number is not available in the array");
}

// Searching using built-in function
console.log("Number is available at ", arr.indexOf(34));
