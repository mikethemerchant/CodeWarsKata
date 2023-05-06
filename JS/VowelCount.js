// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

let str = 'my pyx';

function getCount(str) {
    return (str.match(/[aeiou]/g) || []).length;
}

console.log(getCount(str));

// Q: explain how this works
// A: the match method returns an array of all the matches, so we can use the length property to get the number of matches
// Q: explain the regex
// A: the regex /[aeiou]/g matches all the vowels in the string, the g flag means global, so it will match all instances of the vowels
// Q: explain the || []
// A: the || [] is a short circuit, if the match method returns null, then the || [] will return an empty array, so the length property will return 0
