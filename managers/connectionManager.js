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

module.exports = {
    getConnection : getConnection
};