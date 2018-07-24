"use strict";
exports.__esModule = true;
var message = 'Welcome back!';
console.log(message);
// Variable Declaration
var x = 10;
var y = 20;
var sum;
var title = 'Codevolution';
// Basic Variable Types
var isBeginner = true;
var total = 0;
var name = 'Vishwas';
var sentence = "My name is " + name + "\nI am a beginner in TypeScript";
console.log(sentence);
// Sub types
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
// Array type
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// Tuple type
var person1 = ['Chris', 22];
// Enum type
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
// Any type
var randomValue = 10;
randomValue = true;
randomValue = 'Vishwas';
