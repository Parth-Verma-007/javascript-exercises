function sumAll(x,y){
    let sum = 0;
    for(let i = x; i <= y; i++){
        sum = sum + i
    }
    return sum;
}
console.log(sumAll(1,2));
// Do not edit below this line
module.exports = sumAll;
