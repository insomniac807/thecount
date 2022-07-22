const { evaluate } = require('mathjs');

module.exports = class Counter {
    static isMathExpression(expression) {
        try {
            evaluate(expression);
            return true;
        } catch (error) {
            return false;
        }
    };

    static isRoman(string) {
        // regex pattern
        const pattern = /^(M{1,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M{0,4}(CM|C?D|D?C{1,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M{0,4}(CM|CD|D?C{0,3})(XC|X?L|L?X{1,3})(IX|IV|V?I{0,3})|M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|I?V|V?I{1,3}))$/
        return pattern.test(string);
    };
}