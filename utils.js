function convertCtoF(tempC) {
  return temptC * 1.8 +32
}

function convertFtoC(tempF) {
  return (tempF-32) /1.8
}

//convertCtoF(30)
//convertFtoC(23)

module.exports = { convertFtoC, convertCtoF }