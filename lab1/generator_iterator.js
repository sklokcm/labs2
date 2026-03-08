'use strict';

function* Generation(){
    let a = 1n, b = 1n, c = 1n;
    while(true){
        yield c;
        c = a + b;
        b = a;
        a = c;
    }
}


const Iteration = (generator, timer) => {
    const end = new Date().getTime() + timer*1000;
    const iterable = generator;
    const iterator = iterable[Symbol.iterator]();
    while (new Date().getTime() < end){
        const res = iterator.next();
        console.log(`Value: ${res.value} \n`);
    }
};

Iteration(Generation(), 0.01);
console.log(sum);

