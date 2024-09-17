// Função que filtra as propriedades de um objeto com base em um valor específico
function filtrarPropriedades(objeto, valorFiltro) {
    // Objeto onde serão armazenadas as propriedades filtradas
    const resultado = {};
  
    // Iteração sobre as propriedades do objeto
    for (let propriedade in objeto) {
      // Verifica se o valor da propriedade é maior que o valorFiltro
      if (objeto[propriedade] > valorFiltro) {
        // Adiciona a propriedade ao objeto resultado
        resultado[propriedade] = objeto[propriedade];
      }
    }
  
    // Retorna o novo objeto contendo apenas as propriedades filtradas
    return resultado;
  }
  
  // Exemplo de uso da função
  
  // Objeto produto com várias propriedades
  const produto = {
    nome: 'Laptop',
    preco: 1200,
    peso: 2.5,
    garantia: 3, // em anos
    estoque: 50
  };
  
  // Valor específico para filtrar as propriedades
  const valorFiltro = 1000;
  
  // Chama a função e armazena o resultado
  const produtoFiltrado = filtrarPropriedades(produto, valorFiltro);
  
  // Exibe o resultado no console
  console.log(produtoFiltrado);
  