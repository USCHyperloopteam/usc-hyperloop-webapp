'use strict';

var dashboard = angular.module('DashboardApp',['ngMaterial']);

dashboard.factory("DashboardService", function($http, $q) {
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
    },
    getLatestVelocityValue: function() {
      var defer = $q.defer();
      $http.get('/velocity/getLatestValue').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    getLatestPositionValue: function() {
      var defer = $q.defer();
      $http.get('/position/getLatestValue').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    getLatestPowerValue: function() {
      var defer = $q.defer();
      $http.get('/power/getLatestValue').success(function(resp){
        defer.resolve(resp.toFixed(2));  
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    getLatestWifiValue: function() {
      var defer = $q.defer();
      $http.get('/wifi/getLatestValue').success(function(resp){
        defer.resolve(resp.toFixed(2)); 
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    getLatestBatteryValue: function() {
      var defer = $q.defer();
      $http.get('/battery/getLatestValue').success(function(resp){
        defer.resolve(resp.toFixed(2)); 
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    getLatestLoadValue: function(number) {
      var defer = $q.defer();
      $http.get('/load/getLatestValue'+number).success(function(resp){
        defer.resolve(resp.toFixed(2)); 
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    getLatestPressureValue: function(number) {
      var defer = $q.defer();
      $http.get('/pressure/getLatestValue'+number).success(function(resp){
        defer.resolve(resp.toFixed(2)); 
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    getLatestTemperatureValue: function(type) {
      var defer = $q.defer();
      $http.get('/temperature/getLatestValue'+type).success(function(resp){
        defer.resolve(resp.toFixed(2)); 
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
  };
});






dashboard.controller('DashboardCtrl', function($scope, $interval, DashboardService) {


    $interval(function(){
      DashboardService.getLatestYawValue().then(function(response) {
        $scope.yaw = response;
      });

      DashboardService.getLatestPitchValue().then(function(response) {
        $scope.pitch = response;
      });

      DashboardService.getLatestRollValue().then(function(response) {
        $scope.roll = response;
      });

      DashboardService.getLatestVelocityValue().then(function(response) {
        $scope.velX = response.x.toFixed(2);
        $scope.velY = response.y.toFixed(2);
        $scope.velX = response.z.toFixed(2);
      });

      DashboardService.getLatestPositionValue().then(function(response) {
        $scope.posX = response.x.toFixed(2);
        $scope.posY = response.y.toFixed(2);
        $scope.posZ = response.z.toFixed(2);
      });

      DashboardService.getLatestPowerValue().then(function(response) {
        $scope.power = response;
      });

      DashboardService.getLatestWifiValue().then(function(response) {
        $scope.wifi = response;
      });

      DashboardService.getLatestBatteryValue().then(function(response) {
        $scope.battery = response;
      });

      DashboardService.getLatestLoadValue(1).then(function(response) {
        $scope.load1 = response;
      });

      DashboardService.getLatestLoadValue(2).then(function(response) {
        $scope.load2 = response;
      });

      DashboardService.getLatestLoadValue(3).then(function(response) {
        $scope.load3 = response;
      });

      DashboardService.getLatestLoadValue(4).then(function(response) {
        $scope.load4 = response;
      });

      DashboardService.getLatestLoadValue(5).then(function(response) {
        $scope.load5 = response;
      });

      DashboardService.getLatestLoadValue(6).then(function(response) {
        $scope.load6 = response;
      });

      DashboardService.getLatestPressureValue(1).then(function(response) {
        $scope.pressure1 = response;
      });

      DashboardService.getLatestPressureValue(2).then(function(response) {
        $scope.pressure2 = response;
      });

      DashboardService.getLatestPressureValue(3).then(function(response) {
        $scope.pressure3 = response;
      });

      DashboardService.getLatestTemperatureValue('Inside').then(function(response) {
        $scope.temperature1 = response;
      });

      DashboardService.getLatestTemperatureValue('Outside').then(function(response) {
        $scope.temperature2 = response;
      });

      
    },1000);

});




