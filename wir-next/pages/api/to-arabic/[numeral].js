import validator from "../../../helpers/validator";

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


export default function toArabicHandler({ query: { numeral } }, res) {
    const capitalizedNumeral = numeral.toUpperCase()
    const validated = validator(capitalizedNumeral);

    if (!validated.isValid) return res.status(400).json({ errors: validated.errors });

    let sum = 0;
    let numArr = capitalizedNumeral.split("");

    for (let i = 0; i < numArr.length; i++) {

        let nextNum = numArr[i + 1] ? numArr[i + 1] : undefined;
        let curNum = numArr[i];

        if (nextNum &&
            (numeralOrder.indexOf(curNum) < numeralOrder.indexOf(nextNum))) {
            sum += parseInt(translateValues[numArr.slice(i, i + 2).join("")])
            i++;
        } else {
            sum += parseInt(translateValues[curNum]);
        }
    }

    return res.status(200).json({ arabic: sum.toString() });
}

