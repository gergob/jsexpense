/**
 * Created by greg on 2015.10.11..
 */

var q = require('q');
var connectionManager = require('./connectionManager');

function getCurrencies() {
    var deferred = q.defer();

    connectionManager.getConnection()
        .then(function (connection) {
            connection.query('SELECT * FROM currency', function (error, results) {
                if (error) {
                    console.error(error);
                    deferred.reject(error);
                }
                deferred.resolve(results);
            });
        })
        .fail(function (err) {
            console.error(JSON.stringify(err));
            deferred.reject(err);
        });

    return deferred.promise;
}

function addCurrency(name, conversionRate, forDate) {
    var deferred = q.defer();

    var currencyInsert = 'INSERT INTO currency(name, conversionRate, forDate) VALUES (?,?,?)';
    console.log('Query template' + currencyInsert);
    connectionManager.getConnection()
        .then(function (connection) {
            var query = connectionManager.prepareQuery(currencyInsert, [name, conversionRate, forDate]);
            console.log('Query to execute:' + query);
            connection.query(query, function (error, result) {
                if (error) {
                    console.error(error);
                    deferred.reject(error);
                }
                deferred.resolve(result.insertId);
            });
        })
        .fail(function (err) {
            console.error(JSON.stringify(err));
            deferred.reject(err);
        });

    return deferred.promise;
}

function deleteCurrency(name) {
    var deferred = q.defer();

    var currencyDelete = 'DELETE FROM currency where name = ?';

    connectionManager.getConnection()
        .then(function (connection) {
            var query = connectionManager.prepareQuery(currencyDelete, [name]);
            console.log('Delete query:' + query);
            connection.query(query, function (error, result) {
                if (error) {
                    console.error(error);
                    deferred.reject(error);
                }
                deferred.resolve({affectedRows: result.affectedRows});
            });
        })
        .fail(function (err) {
            console.error(JSON.stringify(err));
            deferred.reject(err);
        });

    return deferred.promise;


}

module.exports = {
    getCurrencies: getCurrencies,
    addCurrency: addCurrency,
    deleteCurrency: deleteCurrency
};