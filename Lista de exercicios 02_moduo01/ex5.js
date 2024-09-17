// Criação do array de objetos alunos
const alunos = [
    {
      nome: 'Ana',
      nota1: 8.5,
      nota2: 9.0
    },
    {
      nome: 'Carlos',
      nota1: 7.0,
      nota2: 6.5
    },
    {
      nome: 'Maria',
      nota1: 9.5,
      nota2: 8.5
    },
    {
      nome: 'João',
      nota1: 6.0,
      nota2: 7.5
    }
  ];
  
  // Iteração sobre o array de alunos usando for...of
  for (const aluno of alunos) {
    // Calcula a média das notas do aluno
    const media = (aluno.nota1 + aluno.nota2) / 2;
  
    // Exibe o nome do aluno e sua média no console
    console.log(`Nome: ${aluno.nome}`);
    console.log(`Média: ${media.toFixed(1)}`); // toFixed(1) para exibir a média com uma casa decimal
    console.log('---'); // Linha de separação para clareza
  }
  