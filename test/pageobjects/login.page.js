import Page from './page'

class Loginpage extends Page {

    /**
    * define elements
    */

    get username()     { return $("[data-test='username']"); }
    get password()     { return $("[data-test='password']"); }
    get loginBtn()     { return $("input.btn_action"); }

    open () {
        super.open('https://www.saucedemo.com')
    }

    login (username,password){
        this.username.waitForDisplayed();
        this.username.click();
        this.username.clearValue();
        this.username.setValue(username);
    
        this.password.waitForDisplayed();
        this.password.click();
        this.password.clearValue();
        this.password.setValue(password);
    
        this.loginBtn.waitForDisplayed();
        this.loginBtn.click();
    };

}

export default new Loginpage()