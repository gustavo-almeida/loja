const cartPage = require("./pages/cartPage");
const homePage = require("./pages/homePage");
const productPage = require("./pages/productPage");

describe("cupom", () => {
  beforeEach(() => {
    cy.visit("/");
    homePage.selecionaProdutoCategoriaUmNivel();
    productPage.selecionaOpcaoComprar();
  });

  it("Cupom invalido", () => {
    cartPage.adicionarCupom("banana");
    cartPage.mensagemCupomExibida();
  });
});
