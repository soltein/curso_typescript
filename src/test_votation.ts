type VotationOption = {
  name: string;
  votes: number;
};

export class Votation {
  private _title: string;
  private _options: VotationOption[] = [];

  constructor(public title: string) {
    this._title = title;
  }

  get options(): VotationOption[] {
    return this._options;
  }

  addOption(option: VotationOption): void {
    this._options.push(option);
  }

  vote(index: number) {
    if (!this._options[index]) return;
    this._options[index].votes++;
  }
}

export class App {
  private _votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this._votations.push(votation);
  }

  showVotation(): void {
    for (const votation of this._votations) {
      console.log(votation.title);

      for (const option of votation.options) {
        console.log(option.name, option.votes);
      }
      console.log('####');
      console.log('');
    }
  }
}

const votation1 = new Votation('Qual sua linguagem de programação preferida?');
votation1.addOption({ name: 'Python', votes: 0 });
votation1.addOption({ name: 'Java', votes: 0 });
votation1.addOption({ name: 'TypeScript', votes: 0 });
votation1.vote(0);
votation1.vote(0);
votation1.vote(1);
votation1.vote(2);
votation1.vote(2);

const votation2 = new Votation('Qual sua cor preferida?');
votation2.addOption({ name: 'Roxo', votes: 0 });
votation2.addOption({ name: 'Azul', votes: 0 });
votation2.addOption({ name: 'Vermelho', votes: 0 });
votation2.vote(0);
votation2.vote(0);
votation2.vote(1);
votation2.vote(0);
votation2.vote(2);

const votationApp = new App();
votationApp.addVotation(votation1);
votationApp.addVotation(votation2);
votationApp.showVotation();
