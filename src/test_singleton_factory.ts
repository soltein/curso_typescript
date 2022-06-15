//Exemplo exclusivo para entender o static e padrão singleton em typescript.
//O exemplo abaixo é meramente de estudo, não devendo ser replicado em produção, devido a fatores como os dados de conexão estarem fixados no código, etc.
//O exemplo do curso, os dados de conexão eram passados no construtor, o que era mais falho, pois se fosse passados dados diferentes, somente o primeiro objeto existiria.
export class Database {
  private static database: Database;
  private host = 'localhost';
  private user = 'root';
  private password = '123456';

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDatabase(): Database {
    if (Database.database) return Database.database;

    Database.database = new Database();
    return Database.database;
  }
}

const db1 = Database.getDatabase();
db1.connect();

const db2 = Database.getDatabase();
db2.connect();

console.log(db1 === db2);
