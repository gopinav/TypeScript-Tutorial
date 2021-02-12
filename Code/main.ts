
export {};
const message = 'Welcome back!';
console.log(message);

// Variable Declarations

let x = 10;
const y = 20;

let sum;
const title = 'Codevolution';

// Basic Variable Types

const isBeginner: boolean = true;
const total: number = 0;
const name: string = 'Vishwas';

const sentence: string = `My name is ${name}
I am a beginner in TypeScript`;

console.log(sentence);

// Sub types
const n: null = null;
const u: undefined = undefined;

const isNew: boolean = null;
const myName: string = undefined;

// Array types
const list1: number[] = [1, 2, 3];
const list2: Array<number> = [1, 2, 3];

// Tuple type
const person1: [string, number] = ['Chris', 22];

// Enum type
enum Color {Red, Green, Blue};
const color: Color = Color.Green;
console.log(color);

// Any type
let anyVariable: any = 10;
anyVariable = true;
anyVariable = 'Vishwas';
console.log(anyVariable.name.firstName);
anyVariable();
anyVariable.toUpperCase();

// Unknown type
let unknownVariable: unknown = 10;
function hasName(obj: any): obj is {name: string} {
  return !!obj && typeof obj === 'object' && 'name' in obj;
}
if (hasName(unknownVariable)) {
  console.log(unknownVariable.name);
}
(unknownVariable as string).toUpperCase(); // Type assertion

// Type inference
let a; // Type is not inferred
a = 10;
a = true;

let b = 10;
// b = true; // Error thrown because number type is inferred

// Union Type
let multiType: number | boolean;
multiType = 20;
multiType = true;

let anyType: any;
anyType = 20;
anyType = true;
anyType = 'Vishwas';

// Functions

// function add(num1: number, num2?: number): number {
//   if (num2)
//     return num1 + num2;
//   else
//     return num1;
// }
// add(5, 10);
// add(5);

function add(num1: number, num2: number = 10): number {
  if (num2)
    return num1 + num2;
  else
    return num1;
}

add(5, 10);
add(5);

// Interface

interface Person {
  firstName: string;
  lastName?: string;
}

function fullName(person: Person) {
  console.log(person.firstName + ' ' + person.lastName);
}

const person = {
  firstName: 'Bruce'
};
fullName(person);

// Class

class Employee {
  // private name: string;
  // public name: string;
  // protected name: string;
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log('Good morning ' + this.name);
  }
}

const employee = new Employee('Vishwas');
console.log(employee.name);
employee.greet();

class Manager extends Employee {
  constructor(name: string) {
    super(name);
  }

  delegateWork() {
    console.log('Manager delegating tasks' + this.name);
  }
}

const manager = new Manager('Bruce');
manager.delegateWork();
manager.greet();
console.log(manager.name);
