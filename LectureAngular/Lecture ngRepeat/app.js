var app = angular.module('ShoppingApp',[]);

app.controller('ProductsController',function($scope){
	$scope.colors = ["brown","cyan","yellow","green","blue","pink"];
});