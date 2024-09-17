// Array de objetos vendas
const vendas = [
    { produto: 'Camisa', quantidade: 10, valor: 50 },
    { produto: 'Calça', quantidade: 5, valor: 100 },
    { produto: 'Sapato', quantidade: 2, valor: 150 },
    { produto: 'Boné', quantidade: 3, valor: 20 }
  ];
  
  // Variável para armazenar o valor total das vendas
  let valorTotalVendas = 0;
  
  // Usando forEach para calcular o valor total
  vendas.forEach(venda => {
    valorTotalVendas += venda.quantidade * venda.valor;
  });
  
  console.log(`Valor total das vendas: R$ ${valorTotalVendas}`);
  