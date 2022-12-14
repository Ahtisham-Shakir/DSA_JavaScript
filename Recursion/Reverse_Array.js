let arr = [1, 2, 3, 4, 5];
let temp;

console.log("array before reverse ", arr);
function reverseArray(data, start, end) {
  if (start < end) {
    temp = data[start];
    data[start] = data[end];
    data[end] = temp;
    reverseArray(data, start + 1, end - 1);
  }
}

reverseArray(arr, 0, arr.length - 1);
console.log("array after reverse", arr);

// reverse using built-in function
let items = [100, 200, 300, 400, 500];
items.reverse();
console.log("Reverse using built-in function ", items);
