'use strict';

angular.module("Shroomy").factory("shroomyFactory", function ($http, $q, FBUrl) {
    let getMushrooms = () => {
        return $q(function (resolve, reject) {
            $http.get(`${FBUrl}/mushrooms/-L4BnzsWQRmUKppzrOpS/mushrooms.json`)
                .then(function (data) {
                    resolve(data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    };
    return { getMushrooms };
});