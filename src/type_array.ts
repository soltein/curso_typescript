function multiplication(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

// Não é necessario explicitar o retorno, pois ts faz a inferência de tipo automáticamente!
// explicitar fica mais claro para quem ler!!!!
function concat(...args: Array<string>): string {
  return args.reduce((ac, valor) => ac + valor);
}

function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

console.log(multiplication(1, 2, 3));

console.log(concat('A', 'B', 'C'));

console.log(toUpperCase('a', 'b', 'c'));
