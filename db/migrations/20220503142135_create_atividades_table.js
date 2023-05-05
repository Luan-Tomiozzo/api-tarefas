exports.up = function(knex) {
  return knex.schema.createTable('activities', function(table) {
    table.increments('id');
    table.string('titulo').notNullable();
    table.string('descricao').notNullable();
    table.boolean('concluida').defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('activities');
};