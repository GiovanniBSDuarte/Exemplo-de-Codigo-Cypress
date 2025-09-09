describe('Exemplo simples - A/B Testing', () => {
  it('Deve acessar a página e validar o título', () => {
    // Visitar a página inicial
    cy.visit('https://the-internet.herokuapp.com/');

    // Clicar no link "A/B Testing"
    cy.contains('A/B Testing').click();

    // Validar o título da página
    cy.get('h3').should('contain.text', 'A/B Test');
  });
});
