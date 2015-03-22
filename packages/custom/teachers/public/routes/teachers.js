'use strict';

angular.module('mean.teachers').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('teachers example page', {
      url: '/teachers/example',
      templateUrl: 'teachers/views/index.html'
    });
  }
]);
