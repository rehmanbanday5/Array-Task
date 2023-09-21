// =======================================================================================================================
//                                              Array Task 
// =======================================================================================================================

//1- Push: 

let array1 : number[] = [1,2,3,4,5,6,7,8,9]

array1.push(56,50)

console.log(array1)


console.log("========================================================================================================")



 //2- Pop: 

array1.pop()
console.log(array1)


console.log("========================================================================================================")



//3- Shift: 

array1.shift()
console.log(array1)


console.log("========================================================================================================")



//4- Unshift:

array1.unshift(0)
console.log(array1)


console.log("========================================================================================================")



//5- Concat:

let array2 : string[] = ["a","b","c"]
let array3 : string[] = ["d","e","f"]

let concatenatedarray : string[] = array2.concat(array3)

console.log(concatenatedarray)


console.log("========================================================================================================")



//6- Join: 

let array4 : string[] = ["Hello", "World", "TypeScript"];

let joinString: string = array4.join(" ");

console.log(joinString); 


console.log("========================================================================================================")



//7- Index of: 

let array5 : number[] = [3,6,9,8]

console.log(array5.indexOf(8))


console.log("========================================================================================================")



//8- Includes: 

console.log(array5.includes(3))
console.log(array5.includes(10))


console.log("========================================================================================================")



//9- Find:

interface person {
    name : string ;
    age  : number ;
}

const people  : person[] = [
   { name : "rehman", age : 17}, 
   { name : "noor" , age : 18},
   { name : "hadi" , age : 10},
]

let findperson = people.find((person) => person.age === 17) 

console.log("found person", findperson);


console.log("========================================================================================================")



//10- Find index: 

let array : number[] = [10,20,30,40,50]

let findindex = array.findIndex((number) => number === 30)  

console.log("index of 30 :" , findindex )  


console.log("========================================================================================================")



//11- Map:

let number = array.map((number) => number ** 2);
console.log(number);


console.log("========================================================================================================")



//12- Filter:

let result = array.filter((item) => item % 2 === 0);
console.log(result);


console.log("========================================================================================================")



//13- Reduce:

let  sum = array.reduce((total, item) => total + item,0 );

console.log("Sum:" , sum) 


console.log("========================================================================================================")



//14- Every:

let  myString = ["Red", "Yellow", "Blue", "Orange"];
let answer = myString.every((item) => item.length !== 10);
console.log(answer);  


console.log("========================================================================================================")


//15- Reverse:

console.log(myString.reverse())








