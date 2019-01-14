function sheepCount(sheep) {
    if(sheep === 0){
        return; 
    }
    console.log(sheep + '' + '-' + 'Another sheep jumps over the fence');
    sheepCount(sheep - 1);  
}

sheepCount(3); 

function doubleArray(array) {
    if(!array.length){
        return []; 
    }
        return [array[0] * 2, ...doubleArray(array.slice(1))]; 
}

console.log(doubleArray([1,2,3]));

function reverseString(string) {
    if(!string.length){
        return ''; 
    }
    return string[string.length -1] + reverseString(string.slice(0,string.length-1)); 
}

console.log(reverseString('reverse')); 

function nthNumber(number) {
    if(number === 0){
        return number; 
    }
    return number + nthNumber(number-1);
}

console.log(nthNumber(9)); 


function decimalToBinary(input) {
    if(input <= 0){
        return '';
    }
    let binaryRep = Math.floor(input%2);
    return decimalToBinary(Math.floor(input/2)) + binaryRep;
}

console.log(decimalToBinary(25));

function factorial(n){
    if(n === 0){
        return 1;
    }
    return n * factorial(n-1);
}

console.log(factorial(52));

[0,1,1,2,3,5,8,13,21,34]

function fibonacci(number) {
    if(number <= 2) {
        return 1;
    }
    return fibonacci(number -2) + fibonacci(number -1);
}

console.log(fibonacci(8));