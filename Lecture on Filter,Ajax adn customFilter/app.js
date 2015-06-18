var App = angular.module('shoppingApp',[]);

App.controller('productController',function($scope,$http){
	//Inititally products array is Empty
	$scope.products = [];
	$scope.limitNumber = 4;
	
	//Get data from serve and update product array
	$http.get('data.json').success(function(resp){
		$scope.products = resp;
	}).error(function(){
		console.log('Error Occured');
	});

	//Logic to delete from array
	$scope.deleteProduct = function(i){
		$scope.products.splice(i,1)
	};

	//Logic to add New product to array as an object
	$scope.addProduct = function(){
		// var tempObject = {};
		// tempObject.name = $scope.prodName;
		// tempObject.price = $scoep.prodPrice;
		var tempObject = {"name":$scope.prodName,"price":$scope.prodPrice};
		$scope.products.push(tempObject);
		//clear boxes:
		$scope.prodName = "";
		$scope.prodPrice = "";
	};
});

App.filter('reverse',function(){
	return function(input){
		return input.split('').reverse().join('');
	};
});






