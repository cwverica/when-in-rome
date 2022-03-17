const translateValues = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900
};

const numeralOrder = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];


function toArabicConverter(numberString) {


    let sum = 0;
    let numArr = numberString.split("");

    for (let i = 0; i < numArr.length; i++) {

        let nextNum = numArr[i + 1] ? numArr[i + 1] : undefined;
        let curNum = numArr[i];

        if (nextNum &&
            (numeralOrder.indexOf(curNum) < numeralOrder.indexOf(nextNum))) {
            sum += parseInt(translateValues[numArr.slice(i, i + 2).join("")])
        } else {
            sum += parseInt(translateValues[curNum]);
        }
    }

    return sum;
}

function toRomanConverter(numberString) {

    let number = parseInt(numberString);
    let romanArray = [];

    // iterate through numeralOrder reversed, checking for divisibility,

    for (let i = numeralOrder.length - 1; i >= 0; i--) {
        let symbol = numeralOrder[i];
        let occurences = Math.floor(number / translateValues[symbol]);
        if (occurences > 0) {
            for (let i = 0; i < occurences; i++) {
                romanArray.push(symbol);
            }
            number -= translateVaules[symbol] * occurences;
        }
    }

    return romanArray.join("");


}
