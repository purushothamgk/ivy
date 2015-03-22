'use strict';

angular.module('mean.parents').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('parents example page', {
      url: '/parents/example',
      templateUrl: 'parents/views/index.html'
    });
  }
]);
