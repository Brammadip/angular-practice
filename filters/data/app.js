var App = angular.module('tableApp',[]);

App.controller('tableController',function($scope,$http){
	$http.get('data.json').success(function(resp){
		$scope.customers=resp;
	});
	$scope.limitNumber=4;
});

App.filter('capitalize',function(){
	return function(input){
		var result=input;
		result=result+result;
		return result;
	}
});