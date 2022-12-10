let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [7, 8, 9, 10];
let arr3 = [];

for (i = 0; i < arr1.length; i++) {
  arr3[i] = arr1[i];
}
for (i = 0; i < arr2.length; i++) {
  arr3[arr1.length + i] = arr2[i];
}
console.log("Resultant array after merge ", arr3);

// Merge using built-in function
let arr4 = arr1.concat(arr2);
console.log("Merge using built-in function ", arr4);

let arr5 = [...arr1, ...arr2];
console.log("Merge using spread operator ", arr5);
