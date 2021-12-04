const productDao = require('./products/ProductDaoProducts');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('product')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('product').insert([...productDao]);
    });
};
