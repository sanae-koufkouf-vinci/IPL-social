const { Main } = require('../src/passwordChecker.js');

describe("isValidPassword function should return true if the password is valid and false if it is not", function() {
    const main = new Main();

    it("isValidPassword should return true when given a password of 8 characters or more", function() {
        let password = "ABCDEFGH";
        const result = main.isValidPassword(password);
        expect(result).toBe(true);
    });

    it("isValidPassword should return false when given a password with less than 8 characters", function() {
        let password = "ABC";
        const result = main.isValidPassword(password);
        expect(result).toBe(false);
    });

    it("isValidPassword should return false when given a password without a special character", function() {
        let password = "ABCDEFGH1";
        const result = main.isValidPassword(password);
        expect(result).toBe(false);
    });

    it("isValidPassword should return false when given a password without a digit", function() {
        let password = "ABCDEFGH!";
        const result = main.isValidPassword(password);
        expect(result).toBe(false);
    });

    it("isValidPassword should return false when given a password containing 'IPL'", function() {
        let password = "ABCIPL123!";
        const result = main.isValidPassword(password);
        expect(result).toBe(false);
    });
});