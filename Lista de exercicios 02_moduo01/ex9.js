// Criação do array de objetos clientes
const clientes = [
    {
      nome: 'Ana',
      idade: 29,
      cidade: 'São Paulo'
    },
    {
      nome: 'Carlos',
      idade: 35,
      cidade: 'Rio de Janeiro'
    },
    {
      nome: 'Maria',
      idade: 42,
      cidade: 'Belo Horizonte'
    },
    {
      nome: 'João',
      idade: 25,
      cidade: 'Porto Alegre'
    }
  ];
  
  // Variável para contar quantos clientes têm mais de 30 anos
  let clientesMaisDe30 = 0;
  
  // Iteração sobre o array de clientes usando forEach
  clientes.forEach(cliente => {
    // Verifica se a idade do cliente é maior que 30
    if (cliente.idade > 30) {
      // Incrementa o contador
      clientesMaisDe30++;
    }
  });
  
  // Exibe o total de clientes com mais de 30 anos
  console.log(`Número de clientes com mais de 30 anos: ${clientesMaisDe30}`);
  