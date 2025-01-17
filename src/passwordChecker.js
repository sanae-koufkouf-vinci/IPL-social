export class Main {

    isValidPassword(password) {
        const hasMinimumLength = this.isValidPasswordLength(password);
        const hasSpecialCharacter = this.containsSpecialCaracter(password);
        const hasDigit = this.containsNumbers(password);
        const doesNotContainIPL = this.doesNotContainIPL(password);

        return hasMinimumLength && hasSpecialCharacter && hasDigit && doesNotContainIPL;
    }

    isValidPasswordLength(password) {
        
        if(password.length<8) return false;

      return true;

      
    }

    containsSpecialCaracter(password) {
        return /[!@#$%^&*(),.?":{}|<>]/.test(password);
    }


    containsNumbers(password) {
        if(password.match(/[0-9]/)) return true;

        return false;
    }



    doesNotContainIPL(password) {
        return !/ipl/i.test(password);
    }
}
