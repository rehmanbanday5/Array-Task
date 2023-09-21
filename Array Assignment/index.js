// =======================================================================================================================
//                                              Array Task 
// =======================================================================================================================
//1- Push: 
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array1.push(56, 50);
console.log(array1);
console.log("========================================================================================================");
//2- Pop: 
array1.pop();
console.log(array1);
console.log("========================================================================================================");
//3- Shift: 
array1.shift();
console.log(array1);
console.log("========================================================================================================");
//4- Unshift:
array1.unshift(0);
console.log(array1);
console.log("========================================================================================================");
//5- Concat:
var array2 = ["a", "b", "c"];
var array3 = ["d", "e", "f"];
var concatenatedarray = array2.concat(array3);
console.log(concatenatedarray);
console.log("========================================================================================================");
//6- Join: 
var array4 = ["Hello", "World", "TypeScript"];
var joinString = array4.join(" ");
console.log(joinString);
console.log("========================================================================================================");
//7- Index of: 
var array5 = [3, 6, 9, 8];
console.log(array5.indexOf(8));
console.log("========================================================================================================");
//8- Includes: 
console.log(array5.includes(3));
console.log(array5.includes(10));
console.log("========================================================================================================");
var people = [
    { name: "rehman", age: 17 },
    { name: "noor", age: 18 },
    { name: "hadi", age: 10 },
];
var findperson = people.find(function (person) { return person.age === 17; });
console.log("found person", findperson);
console.log("========================================================================================================");
//10- Find index: 
var array = [10, 20, 30, 40, 50];
var findindex = array.findIndex(function (number) { return number === 30; });
console.log("index of 30 :", findindex);
console.log("========================================================================================================");
//11- Map:
var number = array.map(function (number) { return Math.pow(number, 2); });
console.log(number);
console.log("========================================================================================================");
//12- Filter:
var result = array.filter(function (item) { return item % 2 === 0; });
console.log(result);
console.log("========================================================================================================");
//13- Reduce:
var sum = array.reduce(function (total, item) { return total + item; }, 0);
console.log("Sum:", sum);
console.log("========================================================================================================");
//14- Every:
var myString = ["Red", "Yellow", "Blue", "Orange"];
var answer = myString.every(function (item) { return item.length !== 10; });
console.log(answer);
console.log("========================================================================================================");
//15- Reverse:
console.log(myString.reverse());
