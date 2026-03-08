'use strict';

export function* FibonachiGeneration(){
    let a = 1n, b = 1n, c = 1n;
    while(true){
        yield c;
        c = a + b;
        b = a;
        a = c;
    }
}

