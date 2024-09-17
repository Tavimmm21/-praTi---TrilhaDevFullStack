// Objeto empresa
const empresa = {
    departamentos: [
      {
        nome: 'Recursos Humanos',
        funcionarios: ['Ana', 'Carlos', 'Fernanda']
      },
      {
        nome: 'Desenvolvimento',
        funcionarios: ['João', 'Maria', 'Pedro']
      },
      {
        nome: 'Marketing',
        funcionarios: ['Lucas', 'Beatriz', 'Mariana']
      }
    ]
  };
  
  // Usando for in para iterar sobre os departamentos
  for (let indiceDepartamento in empresa.departamentos) {
    const departamento = empresa.departamentos[indiceDepartamento];
    
    // Usando for of para iterar sobre os funcionários de cada departamento
    for (let funcionario of departamento.funcionarios) {
      console.log(`Funcionário: ${funcionario}, Departamento: ${departamento.nome}`);
    }
  }
  