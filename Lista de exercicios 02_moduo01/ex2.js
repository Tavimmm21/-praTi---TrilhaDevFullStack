// Criação do objeto livro com propriedades titulo, autor, anoPublicacao e genero
const livro = {
    titulo: '1984',
    autor: 'George Orwell',
    anoPublicacao: 1949,
    genero: 'Distopia'
  };
  
  // Variável para verificar se a propriedade editora existe
  let temEditora = false;
  
  // Verificação de propriedades usando for...in
  for (let propriedade in livro) {
    if (propriedade === 'editora') {
      temEditora = true;
      break; // Se encontramos a propriedade, não precisamos continuar o loop
    }
  }
  
  // Se a propriedade editora não existir, adicionamos ao objeto
  if (!temEditora) {
    livro.editora = 'Editora Exemplo'; // Você pode definir um valor adequado
    console.log('Propriedade "editora" adicionada ao objeto.');
  } else {
    console.log('Propriedade "editora" já existe no objeto.');
  }
  
  // Exibindo o objeto atualizado
  console.log(livro);
  