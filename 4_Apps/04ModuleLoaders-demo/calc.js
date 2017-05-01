const calc = {
    sum: function sum(...numbers) {
        return numbers.reduce((s, n) => s + n, 0);
    },

    multiply: function multiply(...numbers) {
        return numbers.reduce((p, n) => p * n, 1);
    }
}

export { calc };