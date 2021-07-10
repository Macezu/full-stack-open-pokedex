/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('squirtle')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })
  it('pokemon page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})
