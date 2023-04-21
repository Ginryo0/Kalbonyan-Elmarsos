// class User {
//   public name: string; // default - no need to add
//   private age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

interface Greetable {
  name: string;
}

interface Printable {
  print(): void;
}

class User implements Greetable, Printable {
  constructor(public name: string, private age: number) {} // shortcut = adding public/priv to para -> automatic convert parameters to properties
  print() {
    console.log(this.name);
  }
}

// extending a class
class Admin extends User {
  constructor(name: string, age: number, private permissions: string[]) {
    super(name, age);
  }
}

const user = new User('Ahmed', 22);
console.log(user.name);
const num1Input = document.getElementById('num1') as HTMLInputElement; // type casting
const num2Input = <HTMLInputElement>document.getElementById('num2');
const btn = document.querySelector('button')!;

function add(a: number, b: number) {
  // type inference -> functino returns a num
  return a + b;
}

let n; // type: any -> could accept anything
const result = add(5, 3);
let isDone = false; // let type: boolean - const -> -concrete/exact- type: false - because can't change

type PrintMode = 'console' | 'alert';
enum OutputMode {
  CONSOLE,
  ALERT,
}

function printResult(result: any, printMode: OutputMode): void {
  if (printMode === OutputMode.CONSOLE) {
    console.log(result);
  } else if (printMode === OutputMode.ALERT) {
    alert(result);
  }
  //return undefined; ->  type: undefined
}

interface CalcContainer {
  res: number;
  print(): void;
}

type CalcResults = Array<CalcContainer>; // creating types

const results: CalcResults = []; // type = array of objects -> prop - res = num, methd- print = func - no para - returns nothing
const resultsN: Array<number> = [];
resultsN.push(12);

btn.addEventListener('click', () => {
  const n1 = +num1Input.value; // values have to be parsed
  const n2 = +num2Input.value;
  const result = add(n1, n2);
  const resultContainer = {
    res: result,
    print() {
      console.log(this.res);
    },
  };
  results.push(resultContainer);
  // results[0].print();
  // printResult(resultContainer, 'console'); // in type union
  printResult(resultContainer, OutputMode.ALERT);
  printResult(resultContainer, OutputMode.CONSOLE);
});

function logAndEcho<T>(val: any): T {
  console.log(val);
  return val;
}

logAndEcho<string>('Hi There!').split(' ');
