const stack = [];
let currentSize = stack.length;

function push(newVal) {
  stack[currentSize] = newVal;
  currentSize += 1;
}

function pop() {
  if (currentSize > 0) {
    let lastChar = stack[currentSize - 1];
    currentSize -= 1;
    stack.length = currentSize;
    return lastChar;
  }
}

function reverseString(str) {
  for (i = 0; i < str.length; i++) {
    push(str[i]);
  }
  for (i = 0; i < str.length; i++) {
    str[i] = pop();
  }
}

let str = "SHAAM";
str = str.split("");
reverseString(str);
console.log("Reverse of string is = ", str.join(""));
