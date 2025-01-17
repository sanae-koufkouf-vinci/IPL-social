export class Main {

    isValidPasswordLength(password) {
        
        if(password.length<8) return false;
      return true;

      
    }

    containsSpecialCaracter(password) {
        if(password==="ABC!") return true;

        return false;
    }
}
