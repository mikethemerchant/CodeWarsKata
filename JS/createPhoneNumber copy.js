// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// mine
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function createPhoneNumbers(n) {
    return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`
}
console.log(createPhoneNumbers(numbers));

// his
const N2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function createPhoneNumberAI(numbers) {
    return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}
console.log(createPhoneNumberAI(N2));

//console.log(N2.join('').replace(/(...)(...)(....)/, '($1) $2-$3'));  // my learning
// Q: explain how to use regex to replace the first 3 numbers with X
// A: use the regex /(...)/ to capture the first 3 numbers, then use $1 to replace the first 3 numbers with X