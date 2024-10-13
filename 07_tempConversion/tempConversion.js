const convertToCelsius = function(F) {
  let tempInCelsius = (5/9*(F-32));
  finTempinCelsius=tempInCelsius.toFixed(1);
  return parseFloat(finTempinCelsius)
};

const convertToFahrenheit = function(C) {
  let tempinFahrenheit=(9/5*C)+32;
  let finTempinF=tempinFahrenheit.toFixed(1)
  return parseFloat(finTempinF);

};

console.log(convertToCelsius(-100));
console.log(convertToFahrenheit(100));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};










//F=(9/5*c)+32
//C=(5/9*(F-32))