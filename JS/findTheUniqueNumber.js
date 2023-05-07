// there is an array of numbers.  All numbers are equal except  for one.  Try to find it.

const ary = [ 3, 10, 3, 3, 3 ];

function findUniq(arr) {
    let same = -1;
    let diff = [];
    if(arr[0] === arr[1]) {
        same = arr[0];
        diff = arr.filter((d) => d != same );
        return diff[0];
    } else {
      if (arr[0] === arr[2])
      {
        same = arr[0];
        diff = arr.filter((d) => d != same );
        return diff[0];
      }
      else {
        // not equal to either one
        return arr[0];
      }
    } 
}

console.log(findUniq(ary));