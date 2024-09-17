// Criação do objeto carro com propriedades marca, modelo, ano e cor
const carro = {
  marca: 'Toyota',
  modelo: 'Corolla',
  ano: 2023,
  cor: 'Preto'
};

// Iteração sobre as propriedades do objeto usando for in
for (let propriedade in carro) {
  console.log(`${propriedade}: ${carro[propriedade]}`);
}
