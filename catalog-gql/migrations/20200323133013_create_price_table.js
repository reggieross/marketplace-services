
exports.up = async function(knex, Promise) {
    await knex.schema.createTable("price", table => {
        table.string('amount').notNullable();
        table.string('currency').notNullable();
        table.string('site').notNullable();
        table.uuid('id').primary();
        table.string('product_id').notNullable();
    });
};

exports.down = async function(knex, Promise) {
    await knex.schema.dropTable("price")
};

