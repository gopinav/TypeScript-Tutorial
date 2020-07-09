TODO: Continue in leisure time, more folder to come!
> This document is not the final version yet
Feel free to edit :)
- c0deN
[Based on Codevolution's Tutorial](https://www.youtube.com/watch?v=WBPrJSw7yQAhttps://www.youtube.com/watch?v=WBPrJSw7yQA)

# [Hello World Environment Setup](/01_HelloWorld-Environment/)
```typescript
// TypeScript (TS)
let message = 'Hello TS';
console.log(message);
```

### Compile to JavaScript
<code class=" language-bash">$ <span>tsc</span> main.ts</code></pre>
```javascript
// JavaScript (JS)
var message = 'Hello TS';
console.log(message);
```
___
## They both share variables in global space

- Instead, you can treat it as a module, not as a script to avoid the (Cannot redeclare block-scoped) issue.


```typescript
// TS
export {}
let message = 'Hello TS'
console.log(message)
```
Compile again:
<code class=" language-bash">$ <span>tsc</span> main.ts</code></pre>
```javascript
// JS
"use strict";
exports.__esModule = true;
var message = 'Hello TS';
console.log(message);
```

### Useful workflow addition, automatically compile TS to JS on continuously
<code class=" language-bash">$ <span>tsc</span> main --watch</code></pre>

# [Variable Declarations](/02_Variable-Declarations/)
Unlike traditional JavaScript, TypeScript encourages the use of `let` and `const` keywords for variable declarations.

Javascript has only global and function scope, there's no log level scope, this is something that often misleads programmers coming from other languages.

```typescript
// TS
let x = 10;
const y = 20;

let x = 30;  // Cannot redeclare block-scoped variable 'x'
```

## So the question is, what's the difference, and when to use one over the other?
- `let` declarations can be done without initialization
- `const` where as const declarations are always initialized with a value
```javascript
let noNeedToInitialize;
const needsValue = 1;
```

### Once `const` is assigned, it can never be reassigned
```typescript
// TS
let x = 10;
const y = 20;

y = 30;  // Cannot assign to 'y'
```
## Just use `const` for values u know which won't change later on

# [Variable Types](/03_Variable-Types/)
## Basic Types:
```typescript
// Wait but how to add a type?
let isVariable = true;

// Well, in TS it's easy to assign a type!
let isBool: boolean = true;
let integer: number = 0;
let text: string = 'Just text';
```
## So what's the use of having types?
- Static type checking: Avoid mistakes by assigning wrong values to wrong types
- Intellisence: For example name. <- will show a ton of usefull stuff

## But TypeScript also offers something called `Template-Strings` which can hold multiple lines

#### To embed values simply use
> **${varname}**
```typescript
// They also can provide embedded expressions
// You will have to use backticks  `
let word: string = 'Hello.' 
let sentence: string = `${word} 
I am learning TypeScript`;
// Multiple lines work that easy
```
Simply test it with deno for example:
<code class=" language-bash">$ <span>deno</span> run ./03_Variable-Types/templateStrings.ts</code></pre>
```
Hello. 
I am learning TypeScript
```
- As seen, it automatically recognizes the new line


## Ok so more Types to go, `null` and `undefined`
```typescript
let n: null= null;
let u: undefined = undefined;
```
There's not much use on their own, thats why they're classified as subtypes of all other types, u can assign them to all basictypes.

Example:
```typescript
let isNew: boolean = null;
let myName: string = undefined;
```

## Arrays can be defined in two ways
```typescript
// Just use the way you like, there is no advantage

// 1
let list1: number[] = [0,1,2];
// 2
let list2: Array<number> = [0,1,2];

```
## Typescript offers tupel types to store different types in a list
```typescript
let favAnimal: [string,number] = ["Panda",1];
// Numbers of elements in an tupel are fixed
```
- Order of values have to match the order of types, nothing less nothing more neither swap is possible

## Enumeration Types
For declaring an `enum` just use the keyword name and curly braces
```typescript
enum Color {Red,Green,Blue};
```
Declare a variable of type enum and assign a value
```typescript
let c: color = Color.Green;
```
let's log this value to see it in terminal
```typescript
console.log(c)
```
<code class=" language-bash">$ <span>deno</span> run ./03_Variable-Types/enumType.ts</code></pre>
```
1
```
- Enums begin automaticly at zero
- If you need another number, just assign it in the enum
```typescript
enum Color {Red = 5,Green,Blue};
```
Run again
<code class=" language-bash">$ <span>deno</span> run./03_Variable-Types/enumType.ts</code></pre>
- You can see that Green has the value of 6 because it **`autoincrements`**

- Enums are code friendly later on

## Any Type
- If you are unsure what type it will be, use it
### For example we are expecting a value from a 3th party lib, and you don't know the output type
- Allows to assign different types of values
```typescript
let randomValue: any = 10;
randomValue = true;
randomValue = "Damn, no errors :)"
```
- Really helpful when migrate from JavaScript to TypeScript

## ISSUE: It won't call any errors yet because of `any`
```typescript
let myVar: any = 10;
console.log(myVar.name);
myVariable();
myVar.toUpperCase();
```
## To tackle this issue, in TS 3.x and newer there's this new type called `unknown`

- Very similar to the `any` type

- You can't access any property or call from an `unknown`
- It forces to use typeassertion
```typescript
let myVari: unknown = 10;
(myVari as string).toUpperCase();
// (variableTreatet as TypeOfChoice).ThenApply();
```
