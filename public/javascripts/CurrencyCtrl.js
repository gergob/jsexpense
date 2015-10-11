/**
 * Created by greg on 2015.10.11..
 */

var myApp = angular.module('jsexpense');

myApp.controller('CurrencyCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.currencies = [];

        $http.get('/api/currencies').then(function(resp){
            resp.data.forEach(function(item){
                item.isSelected = false;
                $scope.currencies.push(item);
            });
        });

        $scope.deleteCurrencies = function(){
            alert('delete items');
        }


    }]);