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

    it("containsNumbers should return false when given a password without numbers", function() {
        let password = "ABCD";
        const result = main.containsNumbers(password);
        expect(result).toBe(false);
    });

    
    it("doesNotContainIPL should return true when given a password without 'IPL'", function() {
        let password = "ValidPass1!";
        const result = main.doesNotContainIPL(password);
        expect(result).toBe(true);
    });

    it("doesNotContainIPL should return false when given a password containing 'IPL'", function() {
        let password = "ABCIPL123!";
        const result = main.doesNotContainIPL(password);
        expect(result).toBe(false);
    });

    it("doesNotContainIPL should return false when given a password containing 'IPL'", function() {
        let password = "ABCipl123!";
        const result = main.doesNotContainIPL(password);
        expect(result).toBe(false);
    });

   
    it("isValidPassword should return true when given a password that meets all criteria", function() {
        let password = "ValidPass1!";
        const result = main.isValidPassword(password);
        expect(result).toBe(true);
    });
});