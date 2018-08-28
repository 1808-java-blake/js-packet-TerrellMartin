// 1. Fibonacci
// Define function: fib(n) 
// Return the nth number in the fibonacci sequence.

function fib(n){
    if (n <= 1) 
        return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array.
 */

function bubbleSort(numArray){
let swapped;
do {
    swapped = false;
    for (let i = 0; i < numArray.length; i++){
        if (numArray[i] > numArray[i+1]){
            let temp = numArray[i];
            numArray[i] = numArray[i+1];
            numArray[i+1] = temp;
            swapped = true;
         }
        }
    

    }while(swapped);
};
 
/**
 * 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String.
 */

function reverseStr(someStr){

let splitted = somestr.split("");
let reverse = splitted.reverse();
let result = reverse.join("");

return result;

};

/**
 * 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.
 */

function factorial(someNum){
    if(someNum == 0){
        return 1
    }
    else {
        return someNum * factorial(someNum - 1);
    }
};

/**
 * 5. Substring
Define function substring(someStr, length, offset)
Return the substring contained between offset and (offset + length) inclusively.
If incorrect input is entered, use the alert function and describe why the input was incorrect.
 */

function substring(someStr, length, offset){

	if(length < 0 || offset < 0 )
	{
		alert("Either your length/offset is less than 0. Try again");
		return;
    }
    let subStr = [];
    let c = someStr.split("");
    let t = offset + length;
	for(let i = offset; i < t; i++)
		subStr.push(chars[i]);
	return subStr.join("");

};

/**
 * 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator.
 */

function isEven(n){
 //convert n to a sting so that if n contains a decimal value of .5 after division by 2
 //the number is in fact an odd number.
 let d = 2;
 let a = n / 2;
 if (a - Math.floor(a) !== 0){
     console.log("This number is an odd number.");
     return false;
 }
 else {
     console.log("This number is an even number.")
     return true;
 }


};

// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false

function isPalindrome(str){
    let theReg =  /[^A-Za-z0-9]/g;
    let lower = str.toLowercase().replace(theReg, "");
    let reverse = lower.split().reverse().join();

    return reverse === lower;

};

// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *

// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.
function traverseObject(someObj){
    for (let k in someObj) {
        if (someObj.hasOwnProperty(k)) {
          traverse(someObj[k])
}

// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.
function deleteElement(someArr){
    console.log(someArr.length);
    someArr[2] = undefined;
    console.log(someArr.length);

}

// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.
function spliceElement(someArr){
    console.log(someArr.length);
    let array = [];
    for(let i = 0; i >= someArr.length; i++){
        if (i != 2){
            array.push(someArr[i]);
        }
        // else {
        //     someArr.pop();
        // }
    }
    array.push(someArr[2]);
    for(let j = 0; j >= array.length; j++){
        someArr.push(array[i]);
    }
    someArr.pop();
}

// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	var john = new Person("John", 30);
function person(name, age){
    this.name = name;
    this.age = age;

}
    }
var john = new person("John", 30);
}

// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	var john = getPerson("John", 30)

// let getPerson = {
//     name : 'name',
//     age : 20
// }
// var john = getPerson("John", 30);

function getperson(name, age)
{
    return {name:name, age:age};
}