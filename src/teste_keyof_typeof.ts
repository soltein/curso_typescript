const objCores = {
  verde: 'green',
  vermelho: 'red',
  azul: 'blue',
  preto: 'black',
};

type Coresobj = typeof objCores;
type Coreskey = keyof Coresobj;

function traduzirCores(cor: Coreskey, cores: Coresobj) {
  return cores[cor];
}

console.log(traduzirCores('azul', objCores));
console.log(traduzirCores('vermelho', objCores));
console.log(traduzirCores('preto', objCores));
console.log(traduzirCores('verde', objCores));
