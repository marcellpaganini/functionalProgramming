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
/*
let data = 20;

const func1 = () => {
    data ++;
}

const func2 = () => {
    console.log(`data (20): ${data}`)
};

func1();
setTimeout(func2, 1000); //data(20): 21 => This behavior can cause some bugs
*/
//Immutable data can prevent that
//Pure functions: functions that only depend on their input arguments. Input "abc" is always = to output "cba", for example
/*
let data = 20;

const func1 = (data: number) => {
    data ++;
}

const func2 = (data: number) => {
    console.log(`data (20): ${data}`)
};

func1(data);
setTimeout(() => func2(data), 1000); //data(20): 20
*/
//The output above is good, but we still want to have immutable data. Example of a problem:
/*
let data = { result: 20 };

const func1 = (data: { result: number }) => {
    data.result ++;
}

const func2 = (data: { result: number }) => {
    console.log(`result (20): ${data.result}`)
};

func1(data);
setTimeout(() => func2(data), 1000); //result (20): 21
*/
//We have the old prooblem now, because we're not ceating a copy of data, but a pointer to the same object.
//We need pure functions + immutable data in functional programming
var data = { result: 20 };
var func1 = function (data) {
    var newData = { result: data.result + 1 };
};
var func2 = function (data) {
    console.log("result (20): ".concat(data.result));
};
func1(data);
setTimeout(function () { return func2(data); }, 1000); //result (20): 20
