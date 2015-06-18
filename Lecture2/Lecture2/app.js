var App = angular.module('shoppingApp',[]);
App.controller('cartCtrl',function($scope){
	$scope.products = [
			    {
			        "name": "milk",
			        "price": 2.99
			    },
			    {
			        "name": "bread",
			        "price": 5.99
			    },
			    {
			        "name": "eggs",
			        "price": 6.99
			    },
			    {
			        "name": "butter",
			        "price": 6.90
			    }
			   ];

	$scope.deleteProduct = function(i){
		$scope.products.splice(i,1);
	};

	$scope.addProduct = function(){
		var temp = {};
		temp.name = $scope.name;
		temp.price=  parseFloat($scope.price);
		$scope.products.push(temp);
		$scope.name = "";
		$scope.price="";
	};

});



