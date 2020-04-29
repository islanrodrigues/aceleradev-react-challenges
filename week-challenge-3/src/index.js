'use strict'

const fibonacci = (maxValue = 350) => {
    const fibonacciSequence = [0, 1];

    while([...fibonacciSequence].pop() < maxValue) {
        const lastValue = fibonacciSequence[fibonacciSequence.length - 1];
        const penultimateValue = fibonacciSequence[fibonacciSequence.length - 2];

        const newValue = lastValue + penultimateValue;

        fibonacciSequence.push(newValue);
    }

    return fibonacciSequence;
}


const isFibonnaci = (num) => {
    const fibonacciSequence = fibonacci(num);

    return fibonacciSequence.includes(num);
}


module.exports = {
    fibonacci,
    isFibonnaci
}
