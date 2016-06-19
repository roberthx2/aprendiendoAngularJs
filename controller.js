 var app = angular.module("MiModulo",[]);
 app.controller("MiController", function($scope){
 	$scope.nombre = "Roberth";
 	$scope.nuevoComentario = {};
 	$scope.comentarios = [
	 	{
	 		comentario: "Buen tutorial",
	 		username: "roberthx2" 
	 	},
	 	{
	 		comentario: "Malisimo el tutorial",
	 		username: "vegeta"
	 	}
 	];
 	$scope.agregarComentario = function(){
 		$scope.comentarios.push($scope.nuevoComentario);
 		$scope.nuevoComentario = {};
 	}
 });
