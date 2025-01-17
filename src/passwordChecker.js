export class Main {

    isValidPasswordLength(password) {
        
        if(password.length<8) return false;
      return true;

      
    }

    containsSpecialCaracter(password) {
        return /[!@#$%^&*(),.?":{}|<>]/.test(password);
    }
}
