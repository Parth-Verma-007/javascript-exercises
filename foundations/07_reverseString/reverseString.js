function reverseString(string){
    let rev="";
    for(let i = string.length - 1; i >= 0; i--){
        rev += string[i];
    }
    return rev;
};

const reversal = reverseString("Hello, My name is Parth Verma.");

console.log(reversal);
// Do not edit below this line
module.exports = reverseString;
