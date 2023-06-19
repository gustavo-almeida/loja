class productPage {
  elements = {
    buttonComprar: () => cy.get(".principal .botao-comprar"),
  };

  selecionaOpcaoComprar() {
    this.elements.buttonComprar().click();
  }
}

module.exports = new productPage();
