class homePage {
  elements = {
    optionProdutoCategoriaUmNivel: () => cy.get('[data-id="118475035"]'),
  };

  selecionaProdutoCategoriaUmNivel() {
    this.elements.optionProdutoCategoriaUmNivel().click();
  }
}

module.exports = new homePage();
