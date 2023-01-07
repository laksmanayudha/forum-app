/**
 * Login spec
 *
 * should display login page correctly
 * should display alert when email is empty
 * should display alert when email is in invalid format
 * should display alert when password is empty
 * should display alert when email and password are wrong
 * should display threads/home page when email and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
  });

  it('should display login page correctly', () => {
    // verify elements that should be displayed on the page
    cy.get('input[placeholder="Your Email"]').should('be.visible');
    cy.get('input[placeholder="Your Password"]').should('be.visible');
    cy.get('button').contains(/^Login$/).should('be.visible');
  });

  it('should display alert when email is empty', () => {
    // click login button
    cy.get('button').contains(/^Login$/).click();
    // verify window.alert
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when email is in invalid format', () => {
    // fill email
    cy.get('input[placeholder="Your Email"]').type('invalid@email.test');
    // click login button
    cy.get('button').contains(/^Login$/).click();
    // verify window.alert
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" must be a valid email');
    });
  });

  it('should display alert when password is empty', () => {
    // fill email
    cy.get('input[placeholder="Your Email"]').type('valid@email.com');
    // click login button
    cy.get('button').contains(/^Login$/).click();
    // verify window.alert
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when email and password are wrong', () => {
    // fill email
    cy.get('input[placeholder="Your Email"]').type('wrong@email.com');
    // fill password
    cy.get('input[placeholder="Your Password"]').type('wrongpassword');
    // click login button
    cy.get('button').contains(/^Login$/).click();
    // verify window.alert
    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong');
    });
  });

  it('should display threads/home page when email and password are correct', () => {
    // fill email
    cy.get('input[placeholder="Your Email"]').type('yudha@yudha.com');
    // fill password
    cy.get('input[placeholder="Your Password"]').type('12345678');
    // click login button
    cy.get('button').contains(/^Login$/).click();
    // verify threads/home page displayed
    cy.get('button.create-thread').should('be.visible');
    cy.get('li').contains('Logout').should('be.visible');
  });
});
