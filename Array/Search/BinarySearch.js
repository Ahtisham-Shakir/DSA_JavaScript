// Binary search can only be apply to sorted array

let data = [5, 9, 13, 17, 45, 67, 89, 100];
let start = 0;
let end = data.length - 1;
let element = 89;
let index;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  if (data[mid] === element) {
    index = mid;
    break;
  } else if (element < data[mid]) {
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

if (!index) {
  console.log("Element not found");
} else {
  console.log("Element is available at", index);
}
