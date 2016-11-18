(function() {
var app = angular.module("megaApp"); // getter

app.controller("bandMembersController", function($scope) {
    $scope.bandMembers = [ "Paul Simon", "Art Garfunkel" ];
});

})();
