class cartPage {
  elements = {
    inputCupom: () => cy.get("#usarCupom"),
    buttonCupom: () => cy.get("#btn-cupom"),
    msgAlert: () => cy.get(".alert-danger"),
    appliedCouponLabel: () => cy.get(".cupom-sucesso > .cor-secundaria"),
    appliedCouponName: () => cy.get(".cupom-codigo"),
    appliedCouponRemoveOption: () => cy.get(".text-error"),
  };

  adicionarCupom(value) {
    this.elements.inputCupom().type(value);
    this.elements.buttonCupom().click();
  }

  adicionarCupomTeclaEnter(value) {
    this.elements.inputCupom().type(`${value}{enter}`);
  }

  exibidaMensagemCupomInvalido() {
    this.elements.msgAlert().should("contain.text", "Cupom não encontrado.");
  }

  cupomAplicado(value) {
    this.elements
      .appliedCouponLabel()
      .should("contain.text", "Cupom de desconto");
    this.elements.appliedCouponName().should("contain.text", value);
    this.elements.appliedCouponRemoveOption().should("be.visible");
  }
}

module.exports = new cartPage();
