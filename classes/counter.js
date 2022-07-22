const { evaluate } = require('mathjs');

module.exports = class Counter {
    static isMathExpression = (string) => {
        try {
            evaluate(string);
            return true;
        } catch (error) {
            return false;
        }
    };

    static isRoman = (string) => {
        const pattern = /^(M{1,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M{0,4}(CM|C?D|D?C{1,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M{0,4}(CM|CD|D?C{0,3})(XC|X?L|L?X{1,3})(IX|IV|V?I{0,3})|M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|I?V|V?I{1,3}))$/
        return pattern.test(string);
    };

    static isValidExpression = (expression) => {
        return this.isMathExpression(expression) || this.isRoman(expression);
    }

    static romanToInt = (romanNumeral) => {
        let romanDigits = {
            'I' : 1,
            'V' : 5,
            'X' : 10,
            'L' : 50,
            'C' : 100,
            'D' : 500,
            'M' : 1000
        }

        let num = romanDigits[romanNumeral.charAt(0)];
        let pre, curr;

        for( let i = 1; i < romanNumeral.length; i++) {
            curr = romanDigits[romanNumeral.charAt(i)];
            pre = romanDigits[romanNumeral.charAt(i-1)];
            curr <= pre ? num += curr : num = num - pre*2 + curr;
        }

        return num;
    }
}