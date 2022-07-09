```cpp
#include <iostream>
#include <stack>

class Queue {
    std::stack<int> s1, s2;

public:
    void enqueue(int x)
    {
        while (!s1.empty()) {
            s2.push(s1.top());
            s1.pop();
        }

        s1.push(x);

        while (!s2.empty()) {
            s1.push(s2.top());
            s2.pop();
        }
    }

    int dequeue()
    {
        if (s1.empty()) {
            std::cout << "Queue is Empty";
            exit(0);
        }

        int x = s1.top();
        s1.pop();
        return x;
    }
};

int main()
{
    Queue q;
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);

    std::cout << q.dequeue() << '\n';
    std::cout << q.dequeue() << '\n';
    std::cout << q.dequeue() << '\n';

    return 0;
}
```