class Stack {
  items = [];
  currentSize;
  maxSize;
  constructor(size) {
    this.currentSize = this.items.length;
    this.maxSize = size;
  }

  push(newVal) {
    if (this.currentSize >= this.maxSize) {
      console.log("Stack is full can't add ", newVal);
    } else {
      this.items[this.currentSize] = newVal;
      this.currentSize += 1;
    }
  }
  pop() {
    if (this.currentSize > 0) {
      this.currentSize -= 1;
      this.items.length = this.currentSize;
    } else {
      console.log("Stack is already empty");
    }
  }
  display() {
    console.log(this.items);
  }
}

const st1 = new Stack(5);
st1.push(10);
st1.push(20);
st1.push(30);
st1.push(40);
st1.push(50);
st1.push(60);
st1.display();
