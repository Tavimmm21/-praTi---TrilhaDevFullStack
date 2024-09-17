// Objeto carrinho
const carrinho = {
    itens: [
      { nome: 'Camisa', quantidade: 2, precoUnitario: 50 },
      { nome: 'Calça', quantidade: 1, precoUnitario: 100 },
      { nome: 'Sapato', quantidade: 1, precoUnitario: 150 },
      { nome: 'Boné', quantidade: 3, precoUnitario: 20 }
    ]
  };
  
  // Variável para armazenar o valor total do carrinho
  let valorTotalCarrinho = 0;
  
  // Usando forEach para calcular o valor total do carrinho
  carrinho.itens.forEach(item => {
    valorTotalCarrinho += item.quantidade * item.precoUnitario;
  });
  
  console.log(`Valor total do carrinho: R$ ${valorTotalCarrinho}`);
  