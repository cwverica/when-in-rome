const numeralOrder = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];



function RNValidator(numeralString) {

    let isValid = true;
    let errors = [];

    const numeralArr = numeralString.split("");

    let invalidNumerals = [];
    let tooMany = [];
    let unordered = false;

    numeralArr.forEach((el, i) => {
        let next = numeralArr[i + 1] ? numeralArr[i + 1] : undefined;
        let second = numeralArr[i + 2] ? numeralArr[i + 2] : undefined;
        let third = numeralArr[i + 3] ? numeralArr[i + 3] : undefined;
        if (!numeralOrder.includes(el)) {
            invalidNumerals.push(el);
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

    if (invalidNumerals.length > 0) {
        errors.push({
            error: "Invalid Numerals",
            message: "Numeral contains invalid symbol(s)",
            invalidNumerals
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