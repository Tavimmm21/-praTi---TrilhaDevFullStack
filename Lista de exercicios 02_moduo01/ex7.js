// Criação do array de objetos produtos
const produtos = [
    {
      nome: 'Laptop',
      preco: 1500,
      desconto: 0
    },
    {
      nome: 'Smartphone',
      preco: 800,
      desconto: 0
    },
    {
      nome: 'Cadeira',
      preco: 300,
      desconto: 0
    },
    {
      nome: 'Teclado',
      preco: 100,
      desconto: 0
    }
  ];
  
  // Percentual de desconto
  const percentualDesconto = 0.10; // 10%
  
  // Aplicação do desconto e exibição do novo preço usando forEach
  produtos.forEach(produto => {
    // Calcula o valor do desconto
    const valorDesconto = produto.preco * percentualDesconto;
    
    // Aplica o desconto no preço
    produto.preco -= valorDesconto;
    
    // Exibe o nome do produto e o novo preço no console
    console.log(`Nome: ${produto.nome}`);
    console.log(`Novo Preço: R$ ${produto.preco.toFixed(2)}`); // Exibe o preço com duas casas decimais
    console.log('---'); // Linha de separação para clareza
  });
  