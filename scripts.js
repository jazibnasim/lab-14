(function() {
var app = angular.module("jazibApp", ["ngRoute"]); // create the module

app.config(function($routeProvider) {
    $routeProvider.when("/cat", {
        templateUrl: "views/cat.html"
    });
    $routeProvider.when("/dog", {
        templateUrl: "views/dog.html",
        
    });
    $routeProvider.when("/sloth", {
        templateUrl: "views/sloth.html",
        
    });

    
    $routeProvider.when("/porcupine", {
        templateUrl: "views/porcupine.html",
        
    });

    $routeProvider.otherwise({
        templateUrl: "views/surprise.html",
    });
});

})();