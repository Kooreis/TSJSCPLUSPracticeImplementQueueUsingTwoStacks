Here is a TypeScript solution for implementing a queue using two stacks:

```typescript
class Stack<T> {
    private items: T[] = [];

    push(item: T) {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

class Queue<T> {
    private stack1: Stack<T>;
    private stack2: Stack<T>;

    constructor() {
        this.stack1 = new Stack<T>();
        this.stack2 = new Stack<T>();
    }

    enqueue(item: T) {
        this.stack1.push(item);
    }

    dequeue(): T | undefined {
        if (this.stack2.isEmpty()) {
            while (!this.stack1.isEmpty()) {
                this.stack2.push(this.stack1.pop() as T);
            }
        }
        return this.stack2.pop();
    }
}

// Testing the Queue
let queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
queue.enqueue(4);
console.log(queue.dequeue()); // 3
console.log(queue.dequeue()); // 4
```

This code first defines a `Stack` class with `push`, `pop`, and `isEmpty` methods. Then it defines a `Queue` class that uses two instances of the `Stack` class to implement a queue. The `enqueue` method pushes items onto `stack1`, and the `dequeue` method pops items from `stack2`. If `stack2` is empty, it pops all items from `stack1` and pushes them onto `stack2`. This effectively reverses the order of the items, so they can be dequeued in the correct order.