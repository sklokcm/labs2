'use strict';

import {Color} from "./colors_generator.js";


export const Iteration = (generator, timer) => {
    const end = new Date().getTime() + timer*1000;
    const iterable = generator;
    const iterator = iterable[Symbol.iterator]();
    const colorGen = Color();

    while (new Date().getTime() < end){
        const res = iterator.next();
        const color = colorGen.next().value;
        console.log(`${color}Value: ${res.value}\x1b[0m`);
    }
};