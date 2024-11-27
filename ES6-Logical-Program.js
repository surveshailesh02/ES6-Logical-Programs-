
console.log("============= Q.1 WAP To Calculate Sum Of Two No ==========");

function calculateSum(a,b) {
    return a + b;
};
var num1 = 5;
var num2 = 10;
var sum = calculateSum(num1,num2);
console.log("The Sum is",+sum);

console.log("============= Q.2 WAP To Calculate Maximum No Of Array ==========");

function findMax(arr) {
    if (arr.length == 0) {
        return null;
    }
    let max = arr[0];
    for (let index = 1; index < arr.length; index++) {
    if (arr[index] > max) {
        max = arr[index];
    }   
    }
    return max;
}
var numbers = [10,5,20,50,70];
var maxNumber = findMax(numbers);
console.log("Maximum number is:", +maxNumber);

console.log("============= Q.3 WAP To Check Given Str is Palindrome ==========");

console.log("====== Method 1 =======");

function isPalindrome(str) {
    return str == str.split('').reverse().join('');
}
var inputString = 'abcabc';
if (isPalindrome(inputString)) {
    console.log("The String '" + inputString + "'is a Palindrome.");
} else{
    console.log("The String '" + inputString + "'is Not a Palindrome.");
}

console.log("====== Method 2 =======");

function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return str == str.split('').reverse().join('');
}
var inputString1 = "A man, a plan, a canal, Panama!";
console.log("Is the string is palindrome ? " + isPalindrome(inputString1));

console.log("============= Q.4 WAP To Calculate Reverse The Str ==========");

function reverseString(str) {
    return str.split('').reverse('').join('');
}
var inputString = "Hello World!";
var reverseString = reverseString(inputString);
console.log("The reverse string is: " + reverseString);

console.log("============= Q.5 WAP To Calculate Return New Array Even No ==========");

function filterEvenNumbers(arr) {
    return arr.filter(function (num) {
        return num % 2 == 0;
    })
}
var numbers = [1,2,3,4,5,6,7,8,9,10];
var evenNumbers = filterEvenNumbers(numbers);
console.log("The even numbers are: " + evenNumbers);
