/**
 * Created by greg on 2015.10.11..
 */

var mysql = require('mysql');
var q = require('q');

var LOG_PREFIX = '[CONN] - ';

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

        console.log(LOG_PREFIX + 'Connection created with id:' + connection.threadId);
        deferred.resolve(connection);
    });

    return deferred.promise;
}

function prepareQuery(query, parameters){
    if(!query || !parameters) {
        throw  new Error('query and parameters function parameters should be specified.');
    }
    return mysql.format(query, parameters);
}

module.exports = {
    getConnection : getConnection,
    prepareQuery: prepareQuery
};