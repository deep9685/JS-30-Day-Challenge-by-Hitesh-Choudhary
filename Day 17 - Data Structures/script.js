// Activity 1 - Linked List
// Task 1 : Implement a Node Class to represent an element in a linked list with properties value and next.
class Node{
        constructor(value, next = null){
            this.value = value;
            this.next = next 
        }
}

// Task 2: Implemented a LinkedList Class with methods to add a node to the end, remove a node from the end , and display all the node.
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    add(value){
        const newNode = new Node(value);

        if(this.tail){
            this.tail.next = newNode;
        }
        else{
            this.head = newNode;
        }
        this.tail = newNode;
    }

    remove(){
        if(!this.head){
            console.log("List is empty.");
            return;
        }

        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
            return;
        }

        let current = this.head;
        while(current.next !== this.tail){
            current = current.next;
        }

        current.next = null;
        this.tail = current;
    }

    dispaly(){
        if(!this.head){
            console.log("List is empty.");
            return;
        }

        let temp = this.head;
        const values = [];
        while(temp.next !== null){
            values.push(temp.value);
            temp = temp.next;
        }

        console.log(values.join(' -> '));
    }
}

const list = new LinkedList();

list.add(2);
list.add(3);
list.add(4);
list.add(5);

list.dispaly();

list.remove();

list.dispaly();

// Activity 2: Stack
// Task 3: Implement a Stack class methods push (add element), pop (remove element), and peek (view the top element)
class Stack{
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        if(this.isEmpty()){
            console.log("Stack is empty.");
            return;
        }
        else{
            return this.items.pop();
        }
    }

    peek(){
        if(this.isEmpty()){
            console.log("Stack is empty.");
            return null;
        }
        else{
            return this.items[this.items.length-1];
        }
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    display() {
        console.log(this.items.join(' <- '));
    }
}


const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); 
stack.display(); 

console.log(stack.pop()); 
stack.display();

console.log(stack.peek()); 
console.log(stack.size());

// Task 4: Use the stack class to reverse a string by pushing all the characters onto the stack and then popping them off.
let str = "Deepak";
const stack1 = new Stack();

let i = 0;
while(i<str.length){
    stack1.push(str[i]);
    i++;
}

while(!stack1.isEmpty()){
    console.log(stack1.pop());
}

// Activity 3: Queue
// Task 5: Implement a Queue class with methods enqueue(add element), and dequeue(remove element) and front(view the first element);
class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(element){
        this.items.push(element);
    }

    dequeue(){
        if(this.items.length === 0){
            console.log("Queue is empty");
            return;
        }
        
        return this.items.shift();
    }

    front(){
        if(this.items.length === 0){
            console.log("Queue is empty");
            return;
        }

        return this.items[0];
    }

    display(){
        if(this.items.length === 0){
            console.log("Queue is empty");
            return;
        }
        console.log(this.items.join(' <- '));
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const q = new Queue();

q.enqueue(2);
q.enqueue(4);
q.enqueue(6);
q.enqueue(7);
q.enqueue(6);

q.display();

q.dequeue();
q.display();

console.log(q.front());

// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue  and processed in order.
class PrinterQueue{
    constructor(){
        this.queue = new Queue();
    }

    addPrintJob(job){
        console.log(`Adding print job : ${job}`);
        this.queue.enqueue(job);
    }

    processPrintJob(){
        if(this.queue.isEmpty()){
            console.log("No Job to process");
            return;
        }

        const job = this.queue.dequeue();
        console.log(`Processing job : ${job}`);
    }

    displayQueue() {
        console.log('Current printer queue:');
        this.queue.display();
    }
}

const printerQueue = new PrinterQueue();
printerQueue.addPrintJob('Document1.pdf');
printerQueue.addPrintJob('Image2.png');
printerQueue.addPrintJob('Report3.docx');

printerQueue.displayQueue();

printerQueue.processPrintJob(); 
printerQueue.processPrintJob(); 

printerQueue.displayQueue();

// Activity 5: Tree
// Task 7: Implement a treeNode class to represent a node in a binary tree with properties value, left and right
class TreeNode{
    constructor(value,left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

// Task 8: Implement a BinaryTree Class with methods for inserting values and performing in-order traversal to display nodes
class BinaryTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new TreeNode(value);
        
        if(this.root == null){
            this.root = newNode;
        }
        else{
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode){
        if(newNode.value < node.value){
            if(node.left == null){
                node.left = newNode;
            }
            else{
                this.insertNode(node.left, newNode);
            }
        }
        else{
            if(node.right == null){
                node.right = newNode;
            }
            else{
                this.insertNode(node.right, newNode);
            }
        }
    }

    inorderTraversal(node = this.root, result = []){
        if(node){
            // LNR
            this.inorderTraversal(node.left, result);

            result.push(node.value);

            this.inorderTraversal(node.right, result)
        }

        return result;
    }

    displayInOrder() {
        const result = this.inorderTraversal();
        console.log(result.join(' -> '));
    }
}

const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);

tree.displayInOrder();
