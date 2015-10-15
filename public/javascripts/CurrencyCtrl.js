/**
 * Created by greg on 2015.10.11..
 */

var myApp = angular.module('jsexpense');

myApp.controller('CurrencyCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.currencies = [];

    $http.get('/api/currencies').then(function (resp) {
        resp.data.forEach(function (item) {
            item.isSelected = false;
            $scope.currencies.push(item);
        });
    });

    $scope.deleteCurrencies = function () {
        var remaining = [];
        $scope.currencies.forEach(function (item) {
            if (item.isSelected) {
                $http.delete('/api/currencies/' + item.name).then(function (resp) {
                    console.log('Deleting currency ' + item.name + '. NrOfDeleted Items is ' + resp.affectedRows);
                }, function (error) {
                    console.error(error);
                })
            }
            else {
                remaining.push(item);
            }
        });

        $scope.currencies = remaining;
    };


}]);