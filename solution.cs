Here is a JavaScript solution for implementing a queue using two stacks:

```javascript
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length == 0;
    }
}

class Queue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue(element) {
        this.stack1.push(element);
    }

    dequeue() {
        if (this.stack1.isEmpty() && this.stack2.isEmpty()) {
            return "Queue is empty";
        }

        if (this.stack2.isEmpty()) {
            while (!this.stack1.isEmpty()) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
```

This code first defines a `Stack` class with `push`, `pop`, and `isEmpty` methods. Then it defines a `Queue` class that uses two instances of the `Stack` class to implement a queue. The `enqueue` method pushes elements onto the first stack, and the `dequeue` method pops elements from the second stack. If the second stack is empty, it pops all elements from the first stack and pushes them onto the second stack. The `dequeue` method then pops and returns the top element from the second stack.