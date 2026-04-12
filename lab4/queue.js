'use strict';
class PriorityQueue{
    constructor(){
        this.items = [];
        this.counter = 0;
    }

    enqueue(value, priority){
        const newItem = {value, priority, number: this.counter++};
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

        let index=0;
        for(let i=1; i<this.items.length; i++){
            if(mode==="newest"){
                if(this.items[i].number > this.items[index].number) index = i;
            }
            else if(mode === "oldest"){
                if(this.items[i].number< this.items[index].numer) index = i;
            }
        }
        return this.items.splice(index, 1)[0];
    }

    peek(mode="highest"){
        if(mode === "highest"){
            return this.items[0];
        }
        else if (mode === "lowest"){
            return this.items[this.items.length-1];
        }

        let index=0;
        for(let i=1; i<this.items.length; i++){
            if(mode==="newest"){
                if(this.items[i].number > this.items[index].number) index = i;
            }
            else if(mode === "oldest"){
                if(this.items[i].number< this.items[index].number) index = i;
            }
        }
        return this.items[index];
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