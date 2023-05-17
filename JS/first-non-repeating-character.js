function firstNonRepeatingLetter(s) {
    // Add your code here
    const arr = s.split('');
    const count = [];
    arr.forEach(e => {
        if(count[e]) {
        count[e] += 1;
        } else {
        count[e] = 1;
        }
    });
    const first = arr.find(e => count[e] === 1);
    return first ? first : '';
}

console.log(firstNonRepeatingLetter('sTreSS'));



// givin an array of string how can I count the number of times each string appears in the array
let arr = ['m', 'i', 'i', 'k', 'k', 'k', 'e', 'e'];

function countStrings(arr) {
    let count = [];
    arr.forEach(e => {
        if(count[e]) {
            count[e] += 1;
        } else {
            count[e] = 1;
        }
    });
    return count;
}

const count = countStrings(arr);

console.log(count);

const oneCount = count.find(e => count[e] === 1)
// what is wrong with the above code?


console.log(oneCount);

