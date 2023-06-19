class cartPage {
  elements = {
    inputCupom: () => cy.get("#usarCupom"),
    buttonCupom: () => cy.get("#btn-cupom"),
    msgAlert: () => cy.get(".alert-danger"),
  };

  adicionarCupom(value) {
    this.elements.inputCupom().type(value);
    this.elements.buttonCupom().click();
  }

  mensagemCupomExibida() {
    this.elements.msgAlert().should("contain.text", "Cupom não encontrado.");
  }
}

module.exports = new cartPage();
