'use strict';

var dashboard = angular.module('DashboardApp',[]);

dashboard.factory("YPRService", function($http, $q) {
  return {
  	getLatestYawValue: function() {
    	var defer = $q.defer();
  		$http.get('/yaw/getLatestValue').success(function(resp){
    		defer.resolve(resp.toFixed(2));
  		}).error( function(err) {
    		defer.reject(err);
  		});
      	return defer.promise;
    },
    getLatestPitchValue: function() {
    	var defer = $q.defer();
  		$http.get('/pitch/getLatestValue').success(function(resp){
    		defer.resolve(resp.toFixed(2));
  		}).error( function(err) {
    		defer.reject(err);
  		});
      	return defer.promise;
    },
    getLatestRollValue: function() {
    	var defer = $q.defer();
  		$http.get('/roll/getLatestValue').success(function(resp){
    		defer.resolve(resp.toFixed(2));
  		}).error( function(err) {
    		defer.reject(err);
  		});
      	return defer.promise;
    }
  };
});


dashboard.controller('YPRCtrl', ['$scope', 'YPRService', function($scope, YPRService) {

	YPRService.getLatestYawValue().then(function(response) {
		$scope.yaw = response;
  	});

  	YPRService.getLatestPitchValue().then(function(response) {
		$scope.pitch = response;
  	});

  	YPRService.getLatestRollValue().then(function(response) {
		$scope.roll = response;
  	});

}]);


// dashboard.controller("YawCtrl", function($scope, YawService) {
//   $scope.val = YawService.first();
// });









// dashboard.factory("YawService", function($http, $q) {

//   var users = ["Peter", "Daniel", "Nina"];

//   var defer = $q.defer();
//   $http.get('/yaw/getLatestValue').success(function(resp){
//     	defer.resolve(resp);
//     }).error( function(err) {
//     	defer.reject(err);
//     });

//     var x = defer.promise;
//     console.log("defer: ", defer.promise);


//   return {
//     all: function() {
//       return users;
//     },
//     first: function() {
//     	console.log("x: ", x);
//       return x;
//     }
//   };
// });
