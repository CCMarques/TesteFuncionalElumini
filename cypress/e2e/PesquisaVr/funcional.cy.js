/// <reference types="Cypress"/>

describe('Teste funcional aonde aceita VR', () => {
    it('Deve acessar o site', () => {
       cy.visit("https://www.vr.com.br/") 

       cy.get('#lum_4028808471FC1D5D0171FE80340D6AC8_quickAcceptTerm').click()
       cy.get('body > header > nav.vr-main-navigation > div.vr-menu-triggers > button.vr-menu-trigger.vr-menu-trigger--open > svg').click()
       cy.get('#cabecalho > ul > li:nth-child(3) > button').click()
       cy.get('#cabecalho > ul > li:nth-child(3) > ul > li:nth-child(2) > a').click()
       cy.wait(5000)
       cy.screenshot();
       
    });
});




