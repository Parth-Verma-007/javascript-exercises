function convertToCelsius(F) {
  const celsius = (5/9)*(F-32);
  return Math.round(celsius * 10) / 10;
};

function convertToFahrenheit(C) {
  const Fahhh = (C * (9/5)) + 32;
  return Math.round(Fahhh * 10) / 10;
}; 

console.log(convertToCelsius(100));
console.log(convertToFahrenheit(100));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
