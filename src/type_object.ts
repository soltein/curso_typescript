const dados: {
  chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

dados.chaveA = 'Outro valor';
//dados.chaveB = 'Outro valor 1';
dados.chaveE = 'chave nova';
dados.chaveC = 'e ai?';

console.log(dados);

