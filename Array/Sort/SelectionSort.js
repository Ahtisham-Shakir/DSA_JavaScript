// Selection sort

const arr = [20, 12, 53, 3];

for (let i = 0; i < arr.length; i++) {
  let min = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[min]) {
      min = j;
    }
  }
  let temp = arr[i];
  arr[i] = arr[min];
  arr[min] = temp;
}

console.log("array after sorting in ascending order", arr);
