'use strict';

angular.module("Shroomy", [])
.constant("FBUrl", "https://mushroom-mania-4fcaa.firebaseio.com")
.controller('shroomyCtrl', function ($scope, shroomyFactory) {
     shroomyFactory.getMushrooms()
        .then(function (data) {
            console.log('data', data);
            $scope.mushrooms = data;
        }).catch(function (error) {
            console.log('error', error);
        });
});




