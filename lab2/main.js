import {FibonachiGeneration} from "labs2/fibonachi";  
import {AlphabetGeneration} from "labs2/alphabet";
import {Color} from "labs2/colors";


export const Iteration = (generator, timer) => {
    const end = new Date().getTime() + timer*1000;
    const iterable = generator;
    const iterator = iterable[Symbol.iterator]();
    const colorGen = Color();

    while (new Date().getTime() < end){
        const res = iterator.next();
        const color = colorGen.next().value;
        console.log(color(`Value: ${res.value}`));
    }
};


Iteration(FibonachiGeneration(), 0.01);
console.log(" ");
Iteration(AlphabetGeneration(), 0.01);