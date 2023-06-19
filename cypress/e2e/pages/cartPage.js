class cartPage {
  elements = {
    inputCupom: () => cy.get("#usarCupom"),
    buttonCupom: () => cy.get("#btn-cupom"),
    msgAlert: () => cy.get(".alert-danger"),
    appliedCouponLabel: () => cy.get(".cupom-sucesso > .cor-secundaria"),
    appliedCouponName: () => cy.get(".cupom-codigo"),
    appliedCouponRemoveOption: () => cy.get(".text-error"),
    appliedCouponValueLabel: () => cy.get(".cupom-valor"),
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

  cupomFreteGratisAplicado() {
    this.elements
      .appliedCouponValueLabel()
      .should("contain.text", "Frete Grátis");
  }

  cupomValorAplicado() {
    this.elements.appliedCouponValueLabel().should("contain.text", "Desconto:");
    this.elements
      .appliedCouponValueLabel()
      .should("contain.text", "(frete não incluso)");
  }

  cupomValorRegularAplicado() {
    this.cupomValorAplicado();
    this.elements.appliedCouponValueLabel().should("contain.text", "R$");
  }

  cupomValorPercentualAplicado() {
    this.cupomValorAplicado();
    this.elements.appliedCouponValueLabel().should("contain.text", "%");
  }
}

module.exports = new cartPage();
