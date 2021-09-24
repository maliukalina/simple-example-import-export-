const { convertCtoF, convertFtoC } = require('./utils')

const todaysHigh = 84

console.log("High today:" , todaysHigh + 'F', convertFtoC(todaysHigh)+ "C")

const lowTemp = 23

console.log("low today:", convertCtoF(lowTemp) + "F", lowTemp + "c")