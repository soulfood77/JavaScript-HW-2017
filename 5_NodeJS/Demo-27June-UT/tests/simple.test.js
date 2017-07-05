const { expect } = require('chai');

const getValueAfter = (value, seconds) => {
    return new Promise((resolve) => {
        return setTimeout(() => resolve(value), seconds * 1000);
    });
};

describe('Async tests', () => {
    it('With done', (done) => {
        getValueAfter(5, 1)
            .then((value) => {
                expect(value).to.eq(5);
                done();
            });
    });

    it('With promise', () => {
        getValueAfter(5, 1)
            .then((value) => {
                expect(value).to.eq(5);
            });
    });

    it('without calling a funciton', () => {
        expect(5).not.to.be.null;
    });
});

describe('Grouped tests', () => {
    it('should return 4', () => {
        const x = 2;
        const y = 2;

        const result = x + y;

        expect(result).to.eq(4);
    });

    it('should return 4', () => {
        const x = 2;
        const y = 2;

        const result = x + y;

        expect(result).to.eq(4);
    });
});
