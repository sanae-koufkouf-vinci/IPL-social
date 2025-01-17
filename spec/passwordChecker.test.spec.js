import { Main } from '../src/passwordChecker.js';

describe("isValidPassword function should return true if the password is valid and false if it is not", function() {
    const main = new Main();

    it("isValidPasswordLength should return true when given a password of 8 characters or more", function() {
        let password = "ABCDEFGH!";
        const result = main.isValidPasswordLength(password);
        expect(result).toBe(true);
    });

    it("isValidPasswordLength should return false when given a password of less then 8 characters ", function() {
        let password = "ABC";
        const result = main.isValidPasswordLength(password);
        expect(result).toBe(false);
    });
    

    it("containsSpecialCaracter should return false when given a password with a special character", function() {
        let password = "ABCDEFGH1";
        const result = main.containsSpecialCaracter(password);
        expect(result).toBe(false);
    });

    it("containsSpecialCaracter should return true when given a password without a special character", function() {
        let password = "ABC!";
        const result = main.containsSpecialCaracter(password);
        expect(result).toBe(true);
    });

    it("containsNumbers should return true when given a password with numbers", function() {
        let password = "1234ABCD";
        const result = main.containsNumbers(password);
        expect(result).toBe(true);
    });

    it("containsNumbers should return true when given a password with numbers", function() {
        let password = "1234ABCD";
        const result = main.containsNumbers(password);
        expect(result).toBe(true);
    });

   
});