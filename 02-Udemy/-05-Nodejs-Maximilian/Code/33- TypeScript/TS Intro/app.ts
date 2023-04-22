const num1El = document.getElementById('num1') as HTMLInputElement;
const num2El = document.getElementById('num2') as HTMLInputElement;
const btnEl = document.querySelector('button')!;

// Generic type -> type of the inner items of smth like ->  array
const numResults: Array<number> = [];
const textResults: string[] = [];

type NorS = number | string;
type Result = { val: number; timestamp: Date };

// interface adv -> force classes to understand some methods
// any class constructor func -> could be used as a type
interface ResultObj {
  val: number;
  timestamp: Date;
}

function add(num1: NorS, num2: NorS) {
  // Type gaurd -> based on different type
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2;
  } else if (typeof num1 === 'string' && typeof num2 === 'string') {
    return num1 + ' ' + num2;
  }
  return +num1 + +num2;
}

function printRes(resObj: Result) {
  console.log(resObj.val);
}

btnEl.addEventListener('click', () => {
  const num1 = num1El.value;
  const num2 = num2El.value;
  const result = add(+num1, +num2);
  numResults.push(result as number);
  const stringResult = add(num1, num2);
  textResults.push(stringResult as string);
  console.log(result);
  console.log(stringResult);
  console.log(numResults, textResults);
  printRes({ val: result as number, timestamp: new Date() });
});

// console.log(add('1', '6'));

// Promise supports generic types -> type it resolves to
const myPromise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve('It worked!');
  }, 1000);
});

myPromise.then((result) => {
  console.log(result);
});
