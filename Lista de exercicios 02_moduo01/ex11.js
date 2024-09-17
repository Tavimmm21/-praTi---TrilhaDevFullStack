// Array de objetos pedidos
const pedidos = [
    { cliente: 'João', produto: 'Camisa', quantidade: 2 },
    { cliente: 'Maria', produto: 'Calça', quantidade: 1 },
    { cliente: 'João', produto: 'Boné', quantidade: 3 },
    { cliente: 'Ana', produto: 'Sapato', quantidade: 2 },
    { cliente: 'Maria', produto: 'Camisa', quantidade: 2 },
    { cliente: 'Ana', produto: 'Jaqueta', quantidade: 1 }
  ];
  
  // Objeto para armazenar o total de produtos por cliente
  const totalProdutosPorCliente = {};
  
  // Usando forEach para agrupar a quantidade total de produtos por cliente
  pedidos.forEach(pedido => {
    if (totalProdutosPorCliente[pedido.cliente]) {
      totalProdutosPorCliente[pedido.cliente] += pedido.quantidade;
    } else {
      totalProdutosPorCliente[pedido.cliente] = pedido.quantidade;
    }
  });
  
  console.log(totalProdutosPorCliente);
  