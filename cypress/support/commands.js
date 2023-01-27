// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress" />

import landing_page from "../pages/landing_page";

const landingPage = new landing_page()

beforeEach(() => {
    cy.request('/')
        .then((response) => {
            expect(response).property('status').to.equal(200)
        })
    cy.visit('/')
    cy.title().should('equal', 'Electric Cars, Solar & Clean Energy | Tesla')
    landingPage.logo().should('be.visible').and('have.text', 'Tesla homepage')
    landingPage.header().should('be.visible')
    landingPage.footer().should('exist')

})
