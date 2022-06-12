function fibonacci(n: number): number {
  let ant1 = 1;
  let ant2 = 1;
  let i = 3;
  let prox = 0;

  while (i <= n) {
    prox = ant1 + ant2;
    ant2 = ant1;
    ant1 = prox;
    i++;
  }

  return prox;
}

console.log(fibonacci(10));
const dados = 0;
export { dados };
