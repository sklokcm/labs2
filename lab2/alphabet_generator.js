'use strict';

export function* Generation(){
    const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let i =0;
    while(true){
        yield arr[i];
        i++;
        if(i === arr.length) i=0;
    }
}
