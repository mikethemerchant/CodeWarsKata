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

console.log(toCamelCase(str));