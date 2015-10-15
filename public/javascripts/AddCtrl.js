/**
 * Created by Gergo on 10/15/2015.
 */

var myApp = angular.module('jsexpense');

myApp.controller('AddCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.currency = {
        currency: '',
        conversionRate: '',
        forDate: new Date()
    };

    $scope.saveCurrency = function () {
        console.log($scope.currency);
        $http.post('/api/currencies', $scope.currency).then(function (response) {
            console.log('Currency saved with Id:' + response.currencyId);
        },
        function (error) {
            console.error(error);



        });

    };


}]);