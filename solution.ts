class Queue<T> {
    private stack1: Stack<T>;
    private stack2: Stack<T>;

    constructor() {
        this.stack1 = new Stack<T>();
        this.stack2 = new Stack<T>();
    }
}