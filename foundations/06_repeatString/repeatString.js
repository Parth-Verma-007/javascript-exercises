function loop(str,num){
    if (num < 0){
        return "ERROR";
    }
    let i;
    let string = "";
    for (i = 0; i<num; i++){
        string += str;
    }
    return string;
}
const repeatString = loop("HeheHaha",2);
console.log(repeatString);

// Do not edit below this line
module.exports = repeatString;
