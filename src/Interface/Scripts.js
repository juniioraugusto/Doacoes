function pesquisarDoacoes(idDoador) {
  const connection = new MySQLConnection({
    host: "177.44.248.60",
    port: 5432,
    user: "postgres",
    password: "junior123",
    database: "doacao",
  });

  connection.connect((err) => {
    if (err) {
      console.log(err);
      return;
    }

    const query = `SELECT * FROM doacoes WHERE id_doador = ?`;
    const params = [idDoador];

    connection.query(query, params, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log(results);
    });
  });
}
