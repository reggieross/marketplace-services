require("knex");

exports.up = async function(knex, Promise) {
    await knex.schema.createTable("product", table => {
        table.string('brand_id').nullable();
        table.string('description').nullable();
        table.string('name');
        table.increments('id');
    });
};

exports.down = async function(knex, Promise) {
    await knex.schema.dropTable("product")
};
