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

export default function RNValidator(numeralString) {

    let isValid = true;
    let errors = [];

    const numeralArr = numeralString.split("");

    let invalidSymbols = [];
    let tooMany = [];
    let unordered = false;

    numeralArr.forEach((el, i) => {
        let next = numeralArr[i + 1] ? numeralArr[i + 1] : undefined;
        let second = numeralArr[i + 2] ? numeralArr[i + 2] : undefined;
        let third = numeralArr[i + 3] ? numeralArr[i + 3] : undefined;
        if (!numeralOrder.includes(el)) {
            invalidSymbols.push(el);
        }

        if (third && el === next && el === second && el === third) {
            tooMany.push(el);
        }

        if (numeralOrder.indexOf(el) < numeralOrder.indexOf(next)) {
            if ((numeralOrder.indexOf(el) % 4 !== 0)) {
                unordered = true;
            } else {
                let difference = numeralOrder.indexOf(next) - numeralOrder.indexOf(el)
                if (difference !== 1 && difference !== 3) {
                    unordered = true;
                }
            }
        }

        for (let j = i + 2; j < numeralArr.length; j++) {
            if (numeralOrder.indexOf(el) < numeralOrder.indexOf(numeralArr[j])) unordered = true;
        };

    });

    if (invalidSymbols.length > 0) {
        errors.push({
            error: "Invalid Numerals",
            message: "Numeral contains invalid symbol(s)",
            invalidSymbols
        });
        isValid = false;
    }
    if (tooMany.length > 0) {
        errors.push({
            error: "Too Many",
            message: "Too many consecutive occurences of symbol(s)",
            tooMany
        });
        isValid = false;
    }
    if (unordered) {
        errors.push({
            error: "Unordered",
            message: "Numerals are out of accepted order"
        });
        isValid = false;
    }

    return { isValid, errors }
}


