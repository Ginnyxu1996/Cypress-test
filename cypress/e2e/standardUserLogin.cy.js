import loginPage from "../support/pageObjects/loginPage";


describe('standard user login functionality', () => {

  const myLoginPage = new loginPage()
  let errorMessage = 'Epic sadface: Username and password do not match any user in this service'

  beforeEach(() => {

    cy.visit('/')

  })
  
  
  it('should log in with valid username and password', () => {
    
    myLoginPage.login("standard_user","secret_sauce")
    cy.url().should('include', '/inventory.html')
    cy.get('.app_logo').should('be.visible')

  })


  it('should not log in with empty username and password', () => {

    myLoginPage.elements.loginBtn().click()
    myLoginPage.elements.errorMessage().should('be.visible').should('contain', "Epic sadface: Username is required") 

  })


  it('should not log in with empty username until valid username is entered', () => {

    myLoginPage.elements.password().type('secret_sauce')
    myLoginPage.elements.loginBtn().click()
    myLoginPage.elements.errorMessage().should('be.visible').should('contain', "Epic sadface: Username is required")
    myLoginPage.elements.username().type('standard_user')
    myLoginPage.elements.loginBtn().click()
    cy.url().should('include', '/inventory.html')
    cy.get('.app_logo').should('be.visible')
 
  })


  it('should not log in with empty password until valid password is entered', () => {
    
    myLoginPage.elements.username().type('standard_user')
    myLoginPage.elements.loginBtn().click()
    myLoginPage.elements.errorMessage().should('be.visible').should('contain', "Epic sadface: Password is required")
    myLoginPage.elements.password().type('secret_sauce')
    myLoginPage.elements.loginBtn().click()
    cy.url().should('include', '/inventory.html')
    cy.get('.app_logo').should('be.visible')
    
  })
   

  it('should not log in with invalid username until valid username is entered', () => {

    cy.login("STANDARD_USER", "secret_sauce")
    myLoginPage.elements.errorMessage().should('be.visible').should('contain', errorMessage)
    myLoginPage.elements.username().clear().type('standard_user')
    myLoginPage.elements.loginBtn().click()
    cy.url().should('include', '/inventory.html')
    cy.get('.app_logo').should('be.visible')

  })


  it('should not log in with invalid password until valid password is entered', () => {

    myLoginPage.login("standard_user", "SECRET_SAUCE")
    myLoginPage.elements.errorMessage().should('be.visible').should('contain', errorMessage)
    myLoginPage.elements.password().clear().type('secret_sauce')
    myLoginPage.elements.loginBtn().click()
    cy.url().should('include', '/inventory.html')
    cy.get('.app_logo').should('be.visible')

  })

})
    
