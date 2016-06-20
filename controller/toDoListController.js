angular.module("toDoList",["LocalStorageModule"])
	.controller("toDoListController", function($scope, localStorageService){
		if(localStorageService.get("angular-todolist"))
			$scope.todo = localStorageService.get("angular-todolist");
		else
			$scope.todo = [];
		
		$scope.$watch(function(){
			return $scope.newActv;
		}, function(newValue, oldValue){
			console.log(newValue);
			console.log(oldValue);

		});

		//Para arreglos
		//Primer parametro = nombre del arreglo
		//Segundo parametro = function que se ejecutara cuando el arreglo cambie su valor
		$scope.$watchCollection("todo", function(newValue, oldValue){
			localStorageService.set("angular-todolist", $scope.todo);
		});

		$scope.addActv = function(){
			$scope.todo.push($scope.newActv);
			$scope.newActv = {};
		}

		$scope.clean = function()
		{
			$scope.todo = [];
			localStorageService.set("angular-todolist", $scope.todo);
		}
	});