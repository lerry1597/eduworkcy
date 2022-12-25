export class LoginPage{

    username_textbox = '[data-test="username"]'; 
    password_textbox = '[data-test="password"'; 
    checkbox = '';
    login_button = '[data-test="login-button"]';


    enterUsername(username){
        cy.get(this.username_textbox).clear();
        cy.get(this.username_textbox).type(username);
    }

    enterPassword(password){
        cy.get(this.password_textbox).clear();
        cy.get(this.password_textbox).type(password);
    }

    activeCheckbox(){
        cy.get(this.checkbox).check();
    }

    clickLogin(){
        cy.get(this.login_button).click();
    }
}