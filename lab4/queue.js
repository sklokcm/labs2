'use strict';
class PriorityQueue{
    constructor(){
        this.items = [];
        this.counter = 0;
    }

    enqueue(value, priority){
        const newItem = {value, priority};
        let added = false;
        for(let i = 0; i<this.items.length; i++){
            if(priority< this.items[i].priority){
                this.items.splice(i,0,newItem);
                added = true;
                break;
            }
        }

        if(!added){
            this.items.push(newItem);
        }

    }

    dequeue(mode="highest"){
        if(mode==="highest") {
            return this.items.shift();}
        else if(mode==="lowest"){
            return this.items.pop();
        }
    }

    peek(){
        return this.items[0];
    }

}


const queue = new PriorityQueue;

queue.enqueue("A", 6);
queue.enqueue("B", 2);
queue.enqueue("C", 1);
queue.enqueue("D", 4);
queue.enqueue("E", 5);
queue.enqueue("F", 3);

console.log(queue.dequeue("highest"));
console.log(queue.dequeue("lowest"));
console.log(queue.dequeue("highest"));
console.log(queue.dequeue("lowest"));
console.log(queue.dequeue("lowest"));
console.log(queue.dequeue());