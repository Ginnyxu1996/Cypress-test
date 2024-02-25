class loginPage{

elements ={

   username: () => cy.get('[data-test="username"]'),   
   password: () => cy.get('[data-test="password"]'), 
   loginBtn: () => cy.get('[data-test="login-button"]'),
   errorMessage: () => cy.get('[data-test="error"]')
    
 }    
    
   login(username, password){
        this.elements.username().clear().type(username).should('have.value', username)
        this.elements.password().clear().type(password).should('have.value', password)
        this.elements.loginBtn().click()
}    
    
}

export default loginPage;
      