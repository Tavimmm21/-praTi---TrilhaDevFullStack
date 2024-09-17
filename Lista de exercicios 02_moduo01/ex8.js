// Criação do array de objetos filmes
const filmes = [
    {
      titulo: 'Inception',
      diretor: 'Christopher Nolan',
      anoLancamento: 2010
    },
    {
      titulo: 'The Matrix',
      diretor: 'Lana Wachowski, Lilly Wachowski',
      anoLancamento: 1999
    },
    {
      titulo: 'The Shawshank Redemption',
      diretor: 'Frank Darabont',
      anoLancamento: 1994
    },
    {
      titulo: 'The Godfather',
      diretor: 'Francis Ford Coppola',
      anoLancamento: 1972
    }
  ];
  
  // Array para armazenar os títulos dos filmes
  const titulosFilmes = [];
  
  // Iteração sobre o array de filmes usando forEach
  filmes.forEach(filme => {
    // Adiciona o título do filme ao array titulosFilmes
    titulosFilmes.push(filme.titulo);
  });
  
  // Exibe o novo array contendo apenas os títulos dos filmes
  console.log(titulosFilmes);
  