function Memoize(fn){
    const cache = {}

    return (...args) => {
        if(args.toString() in cache){
            console.log(cache);
            return cache[args.toString];
        } 
        const res = fn(...args);
        cache[args.toString()] = res;
        return res;
    }
}

const Multiply5=(n1,n2,n3,n4,n5)=>{
    return n1*n2*n3*n4*n5;
}

const Sum=(...args)=>{
    return args.reduce((n1, n2) =>n1+n2); 
}

const fib=(n) =>{
    if (n<2) return n;
    return fib(n-1) + fib(n-2);
}

const MemoizedMultiply5 = Memoize(Multiply5);
const MemoizedSum = Memoize(Sum)

console.log(MemoizedMultiply5(1,2,3,4,5));
console.log(MemoizedMultiply5(1,2,3,4,5));
console.log(MemoizedMultiply5(1,2,3,4,5));
console.log(MemoizedMultiply5(1,2,3,4,5));

console.log(MemoizedSum(2,3,4,5,7,9));
console.log(MemoizedSum(2,3,4,5,7,9));
console.log(MemoizedSum(2,3,4,5,7,9));
console.log(MemoizedSum(2,3,4,5,7,9));

const MemoizedFib = Memoize(fib);


console.log(MemoizedFib(30));
console.log(MemoizedFib(30));
console.log(MemoizedFib(30));





