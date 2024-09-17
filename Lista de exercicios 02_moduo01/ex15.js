// Array de objetos transacoes
const transacoes = [
    { tipo: 'entrada', valor: 1000 },
    { tipo: 'saida', valor: 200 },
    { tipo: 'entrada', valor: 500 },
    { tipo: 'saida', valor: 100 },
    { tipo: 'entrada', valor: 300 }
  ];
  
  // Variável para armazenar o saldo final
  let saldoFinal = 0;
  
  // Usando forEach para calcular o saldo final
  transacoes.forEach(transacao => {
    if (transacao.tipo === 'entrada') {
      saldoFinal += transacao.valor; // Somando entradas
    } else if (transacao.tipo === 'saida') {
      saldoFinal -= transacao.valor; // Subtraindo saídas
    }
  });
  
  console.log(`Saldo final: R$ ${saldoFinal}`);

  