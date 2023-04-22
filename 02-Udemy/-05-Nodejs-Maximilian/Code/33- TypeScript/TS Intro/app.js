"use strict";
const num1El = document.getElementById('num1');
const num2El = document.getElementById('num2');
const btnEl = document.querySelector('button');
const numResults = [];
const textResults = [];
function add(num1, num2) {
    // Type gaurd -> based on different type
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
function printRes(resObj) {
    console.log(resObj.val);
}
btnEl.addEventListener('click', () => {
    const num1 = num1El.value;
    const num2 = num2El.value;
    const result = add(+num1, +num2);
    numResults.push(result);
    const stringResult = add(num1, num2);
    textResults.push(stringResult);
    console.log(result);
    console.log(stringResult);
    console.log(numResults, textResults);
    printRes({ val: result, timestamp: new Date() });
});
// console.log(add('1', '6'));
