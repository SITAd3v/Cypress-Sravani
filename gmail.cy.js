describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://gmail.com')
    cy.get('#identifierNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click()
  })
})