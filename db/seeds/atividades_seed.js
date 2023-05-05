exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('activities').del()
    .then(function () {
      // Inserts seed entries
      return knex('activities').insert([
        {titulo: 'Estudar Node.js', descricao: 'Estudar o básico do Node.js', concluida: false},
        {titulo: 'Criar API RESTful', descricao: 'API RESTful em Node.js', concluida: false},
        {titulo: 'Subir deploy', descricao: 'Fazer deploy no server de homologação para testes',concluida: false}
      ]);
    });
}; 