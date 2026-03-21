function leapYears(year){
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        return true;
    }else{
        return false;
    }
}

const isLeap = leapYears(1800);

console.log(isLeap);

// Do not edit below this line
module.exports = leapYears;
