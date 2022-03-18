
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


export default function toRomanHandler({ query: { numeral } }, res) {

    let number = parseInt(numeral);

    if (number <= 0 || number >= 4000 || isNaN(number)) {
        return res.status(400).json({ errors: "Number invalid or outside the range of this project" });
    }

    let romanArray = [];

    for (let i = numeralOrder.length - 1; i >= 0; i--) {
        let symbol = numeralOrder[i];
        let occurences = Math.floor(number / translateValues[symbol]);
        if (occurences > 0) {
            for (let i = 0; i < occurences; i++) {
                romanArray.push(symbol);
            }
            number -= translateValues[symbol] * occurences;
        }
    }

    return res.status(200).json({ roman: romanArray.join("") });

}

