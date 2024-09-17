// Array de objetos estoque
const estoque = [
    { produto: 'Camisa', quantidade: 5, minimo: 10 },
    { produto: 'Calça', quantidade: 8, minimo: 8 },
    { produto: 'Sapato', quantidade: 3, minimo: 5 },
    { produto: 'Boné', quantidade: 6, minimo: 7 }
  ];
  
  // Usando forEach para atualizar as quantidades dos produtos abaixo do mínimo
  estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
      item.quantidade *= 2; // Duplicando a quantidade
    }
  });
  
  console.log(estoque);
  