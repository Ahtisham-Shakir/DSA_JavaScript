class Queue {
  constructor(size) {
    this.items = new Array(size);
    this.maxSize = size;
    this.currentSize = 0;
    this.front = -1;
    this.rear = -1;
  }

  enqueue(newVal) {
    // checking if there is empty space in queue
    if (this.currentSize !== this.maxSize) {
      if (this.rear === this.maxSize - 1) {
        this.rear = 0;
      } else {
        this.rear++;
      }
      this.items[this.rear] = newVal;
      this.currentSize++;
      if (this.front === -1) {
        this.front = this.rear;
      }
    } else {
      console.log("Queue is full");
    }
  }

  dequeue() {
    if (this.currentSize !== 0) {
      this.items[this.front] = null;
      if (this.front === this.maxSize - 1) {
        this.front = 0;
      } else {
        this.front++;
      }
      this.currentSize--;
    } else {
      this.front = -1;
      this.rear = -1;
      console.log("Queue is empty");
    }
  }
}
