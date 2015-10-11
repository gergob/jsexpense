/**
 * Created by greg on 2015.10.11..
 */

var mysql = require('mysql');
var q = require('q');


function getConnection() {
    var deferred = q.defer();

    var connection = mysql.createConnection({
        host: '127.0.0.1',
        port: 3306,
        user: 'ujs',
        password: 'ujs1234',
        database: 'jsexpense'
    });

    connection.connect(function (err) {
        if (err) {
            console.error(err);
            deferred.reject(err);
        }

        deferred.resolve(connection);
    });

    return deferred.promise;
}


function getCurrencies() {
    var deferred = q.defer();

    getConnection().then(function (connection) {
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

module.exports = {
    getCurrencies: getCurrencies
};