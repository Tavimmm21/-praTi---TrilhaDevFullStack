// Criação do array de objetos funcionarios
const funcionarios = [
    {
      nome: 'Ana',
      cargo: 'Desenvolvedora',
      salario: 5500
    },
    {
      nome: 'Carlos',
      cargo: 'Analista',
      salario: 4200
    },
    {
      nome: 'Maria',
      cargo: 'Gerente',
      salario: 7200
    },
    {
      nome: 'João',
      cargo: 'Assistente',
      salario: 3200
    }
  ];
  
  // Valor específico para filtrar os funcionários
  const salarioMinimo = 5000;
  
  // Iteração sobre o array de funcionarios usando for...of
  for (const funcionario of funcionarios) {
    // Verifica se o salário do funcionário é maior que o salárioMinimo
    if (funcionario.salario > salarioMinimo) {
      // Exibe o nome, cargo e salário do funcionário no console
      console.log(`Nome: ${funcionario.nome}`);
      console.log(`Cargo: ${funcionario.cargo}`);
      console.log(`Salário: R$ ${funcionario.salario.toFixed(2)}`); // Exibe o salário com duas casas decimais
      console.log('---'); // Linha de separação para clareza
    }
}