
function twoSum(numbers, target) {
    for(let i=0;i<numbers.length;i++) {
        for(let z=0;z<numbers.length;z++) {
            if(i != z) {
                if(numbers[i] + numbers[z] === target) {
                    return [i,z];
                }
            }
        }
    }
}


console.log(twoSum([2, 2, 3], 4));

