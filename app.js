const express = require('express');
const app = express();
const routes = require('./routes/routes');
const db = require('./database');

app.use(express.json());
app.use('/api/activities', routes);


db
  .raw('select 1+1 as result')
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
    app.listen(3000, () => {
      console.log('Servidor rodando em http://localhost:3000');
    });
  })
  .catch((err) => {
    console.error('Erro ao conectar com o banco de dados:', err);
  });
