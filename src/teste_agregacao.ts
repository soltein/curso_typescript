export class Carrinho {
  private readonly produtos: Produto[] = [];

  inserir(...produtos: Produto[]) {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidade(): number {
    return this.produtos.length;
  }

  sum(): number {
    return this.produtos.reduce((sum, produto) => sum + produto.preco, 0);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto = new Produto('Camiseta', 149.9);
const produto1 = new Produto('Caneca', 49.9);
const produto2 = new Produto('Caneta', 2.9);

const carrinho = new Carrinho();
carrinho.inserir(produto, produto1, produto2);

console.log(carrinho.sum());
console.log(carrinho.quantidade());
