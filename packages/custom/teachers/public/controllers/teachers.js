'use strict';

/* jshint -W098 */
angular.module('mean.teachers').controller('TeachersController', ['$scope', 'Global', 'Teachers',
  function($scope, Global, Teachers) {
    $scope.global = Global;
    $scope.package = {
      name: 'teachers'
    };
  }
]);
