// Criação do array de objetos pessoas
const pessoas = [
    {
      nome: 'Ana',
      idade: 30,
      cidade: 'São Paulo'
    },
    {
      nome: 'Carlos',
      idade: 25,
      cidade: 'Rio de Janeiro'
    },
    {
      nome: 'Maria',
      idade: 35,
      cidade: 'Belo Horizonte'
    },
    {
      nome: 'João',
      idade: 28,
      cidade: 'Porto Alegre'
    }
  ];
  
  // Iteração sobre o array de pessoas usando for...of
  for (const pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}`);
    console.log(`Idade: ${pessoa.idade}`);
    console.log(`Cidade: ${pessoa.cidade}`);
    console.log('---'); // Linha de separação para clareza
  }
  