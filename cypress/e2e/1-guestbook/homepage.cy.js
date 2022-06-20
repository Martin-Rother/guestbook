/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Guestbook', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('frontend'))
    })

    it('displays navbar', () => {
        cy.get('.v-toolbar-title__placeholder').should(
            'have.text',
            'Martins Gästebuch'
        )
        cy.get('.v-toolbar__append')
            .children()
            .first()
            .should('have.text', 'Thema umschalten')
        cy.get('.v-toolbar__append')
            .children()
            .eq(1)
            .children()
            .first()
            .should('have.text', 'en')
    })

    it('toggles the language', () => {
        cy.get('.v-toolbar__append').children().eq(1).children().first().click()

        cy.get('.v-toolbar-title__placeholder').should(
            'have.text',
            "Martin's guestbook"
        )
        cy.get('.v-toolbar__append')
            .children()
            .first()
            .should('have.text', 'Toggle Theme')
        cy.get('.v-toolbar__append')
            .children()
            .eq(1)
            .children()
            .first()
            .should('have.text', 'de')
    })

    it('enables the send button if name and entry is given', () => {
        cy.contains('Senden').should('be.disabled')

        cy.get('.v-field__input').find('input').first().type('Martin Rother')
        cy.get('.ql-editor').type('This is a test')

        cy.contains('Senden').should('not.be.disabled')
    })
})
