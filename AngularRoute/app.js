(function () {
    var app = angular.module('customerApp', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider',function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', { templateUrl: '/Templates/Home.html', controller: 'homeViewModel' });
        $routeProvider.when('/customer/list', { templateUrl: '/Templates/CustomerList.html', controller: 'customerListViewModel' });
        $routeProvider.otherwise({ redirectTo: '/' });
        //$locationProvider.html5Mode(true);
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }]);

    app.controller('indexViewModel', function ($scope, $http, $location) {
        $scope.headingCaption = "Angular Routing Primer";
    });

    app.controller('homeViewModel', function ($scope, $http, $location) {
        $scope.headingCaption = 'This is a list of people (not customers)';

        $scope.people = [
            { FirstName: 'Zahid Ali', LastName: 'Mohammed' },
            { FirstName: 'Faraaz', LastName: 'Mohammed' },
            { FirstName: 'Abdullah', LastName: 'Syed' },
            { FirstName: 'Omer', LastName: 'Syed' }
        ];

        $scope.showPerson = function (person) {
            alert('You selected' + person.FirstName + ' ' + person.LastName);
        };

    });

    app.controller('customerListViewModel', function ($scope, $http, $location) {
        $scope.headingCaption = 'Customer List View';


    });

})();