# loja

### Feature Cupom

### Documentação de negócio e testes

**Descrição:**

Uma funcionalidade nova está sendo incluída no carrinho de compras da loja integrada. Um cupom que pode dar diferentes tipos de descontos como: frete grátis, desconto percentual, desconto regular etc.
No front-end ele será apresentado na forma de um campo de texto com label **Cupom de desconto:** e um botão para aplicar o cupom, com label **Usar cupom**.

**Regras de negócio:**

- Cupom não é um campo obrigatório.
- Apenas um cupom pode ser aplicado por carrinho.
- Para aplicar o cupom preenchido no botão "Usar cupom" ou pressionando Enter no teclado.
- Ao tentar aplicar um cupom não existente, o campo deve ser limpo (voltar à condição anterior) e exibir a seguinte mensagem de erro: _"Cupom não encontrado."_
- Ao tentar aplicar um cupom expirado, o campo deve ser limpo (voltar à condição anterior) e exibir a seguinte mensagem de erro: _"O cupom não é válido."_
- Um cupom não aumenta valor do carrinho.
- Ao aplicar um cupom válido, tanto o campo quanto o botão do cupom deixam de ser exibidos, o texto do cupom inserido é exibido no carrinho e uma opção para remover o cupom é exibida ao lado.
- Ao aplicar um cupom válido, o carrinho deve ser atualizado para o contexto de desconto aplicado, mostrar qual o tipo de desconto aplicado e atualizar valor total do carrinho.
- Ao remover um cupom aplicado, tanto o campo quanto o botão do cupom voltam a ser exibidos, com o campo limpo, e o texto do cupom inserido anteriormente assim como opção para remover o cupom deixam de ser exibidos.
- Ao remover um cupom aplicado, o carrinho deve ser atualizado para o contexto anterior à aplicação do cupom.
- O fechamento de compras não deve ser afetado.
