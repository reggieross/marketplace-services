const priceDao = require('./prices/PriceDaoPrices');

exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('prices').del()
        .then(function () {
            // Inserts seed entries
            return knex('price').insert([
                ...priceDao
            ]);
        });
};
