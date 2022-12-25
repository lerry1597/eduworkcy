export class LoginPage{

    username_textbox = '[name="user_login"]'; //menggunakan elemen name
    password_textbox = '[name="user_password"]'; //menggunakan elemen name
    checkbox = '[name="user_remember_me"]';
    login_button = '';


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