//Código fibonacci para validar se o prettier está ok.

function fibonacci(n: number) {
  let total = 2;
  let ant1 = 1;
  let ant2 = 1;
  console.log(ant1);
  console.log(ant2);
  let i = 3;

  while (i <= n) {
    const prox = ant1 + ant2;
    total += prox;
    console.log(prox);
    ant2 = ant1;
    ant1 = prox;
    i++;
  }

  console.log('Total: ', total);
}

fibonacci(34);
