'use strict';
class PriorityQueue{
    constructor(){
        this.items = [];
    }

    enqueue(value,priority){
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

    dequeue(){
        return this.items.shift();
    }

    peek(){
        return this.items[0];
    }

    isEmpty(){
        return this.items.length===0;
    }
}


const queue = new PriorityQueue;

queue.enqueue("low priority", 7);
queue.enqueue("avarage priority", 3);
queue.enqueue("highest priority", 1);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());