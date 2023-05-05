let str = "the_stealth_warrior"

function toCamelCase(str){
    // split string into array
    let ary = str.split('');
    // return if array is empty string
    if(ary.length === 0) return '';
    // loop through array
    ary.map((item, index) => {
        if(item === '_' || item === '-') {
            // remove the underscore and uppercase the next letter
            ary.splice(index, 1);
            ary[index] = ary[index].toUpperCase();
        }
    });

    return ary.join('');
}



// one liner
function toCamelCase2(str){
    return str.split(/-|_/g) // split string into array 
               // Q: does this split on the - and _?
                // A: yes, the g flag means global, so it will split on all instances of - and _
              .map((w, i) => // loop through array
                (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) // uppercase if not first letter // or it just returns the char unchanged
                // Q: what does charAt(0) do?
                // A: returns the first character of a string // then it uppercases it

              + w.slice(1))
                // q: what does the + do?
                // a: it concatenates the strings
                // Q: what does slice(1) do?
                // A: returns the rest of the string after the first character
              
              .join('');
              // this joins the sub strings back together
  }

  console.log(toCamelCase2(str));

  // ok lets see what you create

//create a function that will take a string, remove the - and _ and return the first letter of each word capitalized, but not the first letter of the string
// example: the-stealth-warrior
// output: TheStealthWarrior

function convertString (str) {
    return str.split(/-|_/g).map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)).join('');
}
