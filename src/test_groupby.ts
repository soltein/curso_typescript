function agrupar(array_entrada: any[], key: string | number): any {
  return array_entrada.reduce(function (acumulado, atual) {
    const valor = atual[key];
    acumulado[valor] = acumulado[valor] || [];
    acumulado[valor].push(atual);

    return acumulado;
  }, {});
}

const clientes = [
  {
    codigo_cliente: '1',
    servico: 'Serviço 1',
    data_venda: '2022-06-20',
    status: 'Aguardando',
    vendedor: 'João',
    nome: 'Camila',
    email: 'camila@camila.com',
  },
  {
    codigo_cliente: '2',
    servico: 'Serviço 1',
    data_venda: '2022-06-21',
    status: 'Aguardando',
    vendedor: 'José',
    nome: 'João',
    email: 'email@email.com',
  },
  {
    codigo_cliente: '3',
    servico: 'Serviço 2',
    data_venda: '2022-06-21',
    status: 'Aguardando',
    vendedor: 'João',
    nome: 'Maria',
    email: 'email@email.com',
  },
  {
    codigo_cliente: '4',
    servico: 'Serviço 3',
    data_venda: '2022-06-22',
    status: 'Instalado',
    vendedor: 'Maria',
    nome: 'Marta',
    email: 'email@email.com',
  },
];

//console.log(groupBy(emps, 'department'));
console.log(agrupar(clientes, 'vendedor'));
