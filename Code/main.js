"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Welcome back!';
console.log(message);
// Variable Declarations
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
// Array types
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
;
var color = Color.Green;
console.log(color);
// Any type
var anyVariable = 10;
anyVariable = true;
anyVariable = 'Vishwas';
console.log(anyVariable.name.firstName);
anyVariable();
anyVariable.toUpperCase();
// Unknown type
var unknownVariable = 10;
function hasName(obj) {
    return !!obj && typeof obj === 'object' && 'name' in obj;
}
if (hasName(unknownVariable)) {
    console.log(unknownVariable.name);
}
unknownVariable.toUpperCase(); // Type assertion
// Type inference
var a; // Type is not inferred
a = 10;
a = true;
var b = 10;
// b = true; // Error thrown because number type is inferred
// Union Type
var multiType;
multiType = 20;
multiType = true;
var anyType;
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
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(5, 10);
add(5);
function fullName(person) {
    console.log(person.firstName + ' ' + person.lastName);
}
var person = {
    firstName: 'Bruce'
};
fullName(person);
// Class
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
    }
    Employee.prototype.greet = function () {
        console.log('Good morning ' + this.name);
    };
    return Employee;
}());
var employee = new Employee('Vishwas');
console.log(employee.name);
employee.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name) {
        return _super.call(this, name) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log('Manager delegating tasks' + this.name);
    };
    return Manager;
}(Employee));
var manager = new Manager('Bruce');
manager.delegateWork();
manager.greet();
console.log(manager.name);
