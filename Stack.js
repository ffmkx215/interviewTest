class Stack {
    constructor() {
        this.length = 0;
        this.head = null;
    }
    //add node to the tail
    push(item){
        let node = new Node(item);
        node.next = this.head;
        this.head = node
        this.length++
    }
    pop(){
        if (this.length === 0) return null;
        const targetNode = this.head;
        this.head = targetNode.next;
        this.length--
        return targetNode.item
    }
    size(){
        return this.length
    }
}
class Node {
    constructor(item){
        this.item = item;
        this.next = null;
    }
}
const myStack = new Stack()
myStack.push(1)
myStack.push(2)
myStack.push(3)
console.log(myStack.pop())
console.log(myStack.size())