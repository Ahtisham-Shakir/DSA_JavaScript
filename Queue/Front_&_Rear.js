let queue = [];
let currentSize = queue.length;
const maxSize = 5;

function enqueue(newVal) {
  if (currentSize >= maxSize) {
    console.log("Queue is already full");
  } else {
    queue[currentSize] = newVal;
    currentSize++;
  }
}

function dequeue() {
  if (currentSize > 0) {
    for (let i = 0; i < queue.length; i++) {
      queue[i] = queue[i + 1];
    }
    currentSize--;
    queue.length = currentSize;
  } else {
    console.log("Queue is already empty");
  }
}

function display() {
  console.log(queue);
}

function front() {
  if (isEmpty()) {
    console.log("Queue is empty");
  } else {
    console.log("Front of queue is", queue[0]);
  }
}

function rear() {
  if (isEmpty()) {
    console.log("Queue is empty");
  } else {
    console.log("Rear of queue is", queue[currentSize - 1]);
  }
}

function isEmpty() {
  if (currentSize <= 0) {
    return true;
  } else {
    return false;
  }
}
