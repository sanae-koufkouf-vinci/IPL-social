export class Main {

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
}
