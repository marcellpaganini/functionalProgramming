//Can't change variable values in functional programming (Immutability)
/*
let age = 30;
age ++;

console.log(age); //31
*/
//We need to use const instead
/*
const age = 30;
age++; //ERROR: Cannot assign to 'age' because it is a constant.
*/
//Solution: create a new variable
/*
const age = 30;
const newAge = age + 1;

console.log(newAge); //31
*/
//Another example of immutable data to avoid side effects
var data = 20;
var func1 = function () {
    data++;
};
var func2 = function () {
    console.log("data (20): ".concat(data));
};
func1();
setTimeout(func2, 1000); //data(20): 21 => This behavior can cause some bugs
