// given to int a and b, that can be positive or negative, find the sum of all the integers between them and including them and return it. If the two numbers are equal return a or b.
function getSum(a,b) {
    let sum = 0;
    if (a === b) {
        return a;
    } else if (a < b) {
        for (let i = a; i <= b; i++) {
            sum += i;
        }
    } else {
        for (let i = b; i <= a; i++) {
            sum += i;
        }
    }
    return sum;
}

console.log(getSum(-2, 2)); 
