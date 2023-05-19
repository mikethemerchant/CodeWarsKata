// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
//
function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        const num1 = numbers[i];
        for (let j = i + 1; j < numbers.length; j++) {
            const num2 = numbers[j];
            if (num1 + num2 === target) {
                return [i, j];
            }
        }
    }
}


console.log(twoSum([2, 2, 3], 4));

