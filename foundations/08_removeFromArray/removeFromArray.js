const arr = [1,2,3,4,5,6];
function removeFromArray(array,...num){
    const newArr = [];
    for(let i =0; i < array.length; i++){
        if(!num.includes(array[i])){
            newArr.push(array[i]);
        }
    }
    return newArr;
}
const newArr = removeFromArray(arr,3,4,5);
console.log(newArr);
// Do not edit below this line
module.exports = removeFromArray;
