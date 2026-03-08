'use strict';

export const Iteration = (generator, timer) => {
    const end = new Date().getTime() + timer*1000;
    const iterable = generator;
    const iterator = iterable[Symbol.iterator]();
    while (new Date().getTime() < end){
        const res = iterator.next();
        console.log(`Value: ${res.value} \n`);
    }
};