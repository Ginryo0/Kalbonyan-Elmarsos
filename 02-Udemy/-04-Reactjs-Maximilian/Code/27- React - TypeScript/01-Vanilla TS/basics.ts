// Primitives: num, str, boolean
// Complex: arrays, obj
// Function types, parameters

// Prim

let age: number;

age = 12;

let userName: string | string;

userName = 'mesmhesh';

let isGood: boolean;

isGood = true;

// More Complex types
let hobbies: string[];
hobbies = ['gaming', 'eating'];

let hobbies2: Array<string> = ['eating', 'eating'];

let person: { name: string; age: number };
person = {
  name: 'Meshmesh',
  age: 30,
};

// person = {
//   isEmployee: true,
// };

let people: { name: string; age: number }[];

// Type inference
// If you init a var with a value -> type inference will set the type of that var
let course: string | number | boolean = 'React - complete course';

course = 23;

// Type aliases
type Person = { name: string; age: number };
let person0: Person;
person = {
  name: 'Meshmesh',
  age: 30,
};

// person = {
//   isEmployee: true,
// };

let people0: Person[];

// Function & types
// here number type is infered
function add(a: number, b: number): number {
  return a + b;
}

// void type
function printOutput(value: any) {
  console.log(value);
}

// Generics <Type>
// generics -> adv: Type safe functions that are flexible
// for single execution that generic type is locked
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, 0);
const stringArr = insertAtBeginning<string>(['a', 'b', 'c'], 'd');
stringArr[0].split('');
