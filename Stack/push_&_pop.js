let stack = [];
let currentSize = stack.length;
const maxSize = 5;

function push(newVal) {
  if (currentSize < maxSize) {
    stack[currentSize] = newVal;
    currentSize += 1;
  } else {
    console.log("Stack is full you can not add ", newVal);
  }
}

function pop() {
  if (currentSize > 0) {
    currentSize -= 1;
    stack.length = currentSize;
  } else {
    console.log("Stack is already empty");
  }
}

push(10);
push(20);
push(30);

pop();
pop();
pop();
pop();

push(30);
push(20);
push(20);
push(20);
push(10);
push(100);
console.log(stack);
