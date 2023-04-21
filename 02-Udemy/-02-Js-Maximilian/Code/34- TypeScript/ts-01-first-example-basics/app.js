// class User {
//   public name: string; // default - no need to add
//   private age: number;
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    } // shortcut = adding public/priv to para -> automatic convert parameters to properties
    print() {
        console.log(this.name);
    }
}
// extending a class
class Admin extends User {
    constructor(name, age, permissions) {
        super(name, age);
        this.permissions = permissions;
    }
}
const user = new User('Ahmed', 22);
console.log(user.name);
const num1Input = document.getElementById('num1'); // type casting
const num2Input = document.getElementById('num2');
const btn = document.querySelector('button');
function add(a, b) {
    // type inference -> functino returns a num
    return a + b;
}
let n; // type: any -> could accept anything
const result = add(5, 3);
let isDone = false; // let type: boolean - const -> -concrete/exact- type: false - because can't change
var OutputMode;
(function (OutputMode) {
    OutputMode[OutputMode["CONSOLE"] = 0] = "CONSOLE";
    OutputMode[OutputMode["ALERT"] = 1] = "ALERT";
})(OutputMode || (OutputMode = {}));
function printResult(result, printMode) {
    if (printMode === OutputMode.CONSOLE) {
        console.log(result);
    }
    else if (printMode === OutputMode.ALERT) {
        alert(result);
    }
    //return undefined; ->  type: undefined
}
const results = []; // type = array of objects -> prop - res = num, methd- print = func - no para - returns nothing
const resultsN = [];
resultsN.push(12);
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', () => {
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
function logAndEcho(val) {
    console.log(val);
    return val;
}
logAndEcho('Hi There!').split(' ');
