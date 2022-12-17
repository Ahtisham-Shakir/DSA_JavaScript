// Binary search can only be apply on sorted array

let data = [5, 9, 13, 17, 45, 67, 89, 100];
let start = 0;
let end = data.length - 1;
let element = 89;
let index = undefined;

function binarySearch(arr, start, end) {
  if (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] === element) {
      index = mid;
      return mid;
    } else if (arr[mid] < element) {
      binarySearch(arr, mid + 1, end);
    } else {
      binarySearch(arr, start, mid - 1);
    }
  }
}

binarySearch(data, start, end);
if (index === 0 || index) {
  console.log("Element is available at", index);
} else {
  console.log("Element not found");
}
