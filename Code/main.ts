export {};
let message = 'Welcome back!';
console.log(message);

// Variable Declaration
let x = 10;
const y = 20;

let sum;
const title = 'Codevolution';

// Basic Variable Types
let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Vishwas';

let sentence: string = `My name is ${name}
I am a beginner in TypeScript`;

console.log(sentence);

// Sub types
let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

// Array type

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];


// Tuple type

let person1: [string, number] = ['Chris', 22];

// Enum type
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log(c);

// Any type
let randomValue: any = 10;
randomValue = true;
randomValue = 'Vishwas';

// Type inference
let a;
a = 10;
a = true;

let b = 10;

// Union Types
let multiType: number | boolean;
multiType = 20;
multiType = true;

let anyType: any;
anyType = 20;
anyType = true;

// Functions

function add(num1: number, num2: number = 10): number {
  if (num2)
    return num1 + num2;
  else
    return num1;
}

add(5, 10);
add(5);
