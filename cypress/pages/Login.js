export class Login {
    navigate(){
        cy.visit('/');
        return this;
    }
    login(userName,password){
        cy.get('#email').type(userName);
        cy.get('#password').type(password);
        cy.get('.button').click();
        return this;
    }
}