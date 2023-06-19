const cartPage = require("./pages/cartPage");
const homePage = require("./pages/homePage");
const productPage = require("./pages/productPage");

describe("Coupon Feature", () => {
  beforeEach(() => {
    cy.fixture("testData").as("data");
    cy.visit("/");
    homePage.selecionaProdutoCategoriaUmNivel();
    productPage.selecionaOpcaoComprar();
  });

  it("Cupom válido com botão adicionar", function () {
    const cupom = this.data.coupon.freteGratis;
    cartPage.adicionarCupom(cupom);
    cartPage.cupomAplicado(cupom);
  });

  it("Cupom válido com tecla Enter", function () {
    const cupom = this.data.coupon.freteGratis;
    cartPage.adicionarCupomTeclaEnter(cupom);
    cartPage.cupomAplicado(cupom);
  });

  it("Cupom invalido", function () {
    cartPage.adicionarCupom(this.data.coupon.invalido);
    cartPage.exibidaMensagemCupomInvalido();
  });
});
