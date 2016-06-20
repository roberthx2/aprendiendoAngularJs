angular.module("filtros", [])
	.filter("removeHtml", function(){
		return function(texto){
			//Elimina etiquetas html
			return String(texto).replace(/<[^>]+>/gm,"");
		}
	})
	.controller("filtroController", function($scope){
		$scope.miHtml = {};
		$scope.miHtml.title = "Hola";
		$scope.miHtml.body = "<p>Hola mundo</p>";
		$scope.costo = 2;
	});