//Exercise 1:
//Write a function applyDiscount that takes an array of prices and a callback function. 
// The callback should apply a discount to each price. After the discount is applied, log the final prices.
let price = [1, 2, 3, 4, 5];
let discount= (.2);
function applyDiscount (price, discount, callback) {
let finalPrice = price.map((price)*(discount));
callback (finalPrice);
};
console.log(finalPrice);

//Exercise 2:
//Write a function squareAndPrint that takes a number and uses an arrow function to square the number and log the result.
let num= 3;
function squareAndPrint (num) {
    let square = (num=>num^2);
    console.log (square);
}

//Exercise 3:
//Use map to take an array of strings and return an array where each string is reversed.
let string = ['54321', '12345', '98765', '56789'];
let reverse = string.map(str => str.split('').reverse().join(''));
console.log = reverse

//Exercise 4:
//Use filter to return only the odd numbers from an array of integers.
let integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddFilter = integers.filter(integers % 2 !==0);

console.log = oddFilter;


//Exercise 5:
//Write a function that uses setTimeout to log "Task completed!" after a 5-second delay.
// Additionally, set up a setInterval to log "Still waiting..." every 2 seconds.

setTimeout(() => {
    console.log ("Task Completed!");
}, 5000)

setInterval (() => {
    console.log ("Still Waiting...")
},2000)