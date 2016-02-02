(function () {
    var app = angular.module('store-products', []);
    app.directive('productDescription', function () {
        return {
            restrict: 'E',
            templateUrl: 'product-description.html'
        };
    });

    app.directive('productTabs', function () {
        return {
            restrict: 'E',
            templateUrl: 'product-tabs.html',
            controller: function () {
                this.tab = 1;

                this.selectTab = function (setTab) {
                    this.tab = setTab;
                };

                this.isSelected = function (checkTab) {
                    return this.tab == checkTab;
                };
            },
            controllerAs: 'panel'
        };
    });
})();