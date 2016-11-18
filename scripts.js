(function() {
var app = angular.module("jazibApp", ["ngRoute"]); // create the module

app.config(function($routeProvider) {
    $routeProvider.when("/cat", {
        templateUrl: "views/cat.html"
    });
    $routeProvider.when("/dog", {
        templateUrl: "views/dog.html",
        
    });
    $routeProvider.otherwise({
        template: "Please select one of the links above."
    });
});

})();