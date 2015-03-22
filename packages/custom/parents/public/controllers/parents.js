'use strict';

/* jshint -W098 */
angular.module('mean.parents').controller('ParentsController', ['$scope', 'Global', 'Parents',
  function($scope, Global, Parents) {
    $scope.global = Global;
    $scope.package = {
      name: 'parents'
    };
  }
]);
