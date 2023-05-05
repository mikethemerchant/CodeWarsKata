// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending) {
    return str.endsWith(ending);
}

console.log(solution('abcde', 'cde')); // true
console.log(solution('abcde', 'abc')); // false

// Q: explain how to use regex to replace the first 3 numbers with X
// A: use the regex /(...)/ to capture the first 3 numbers, then use $1 to replace the first 3 numbers with X