 var app = angular.module("MiModulo",[]);
 app.controller("MiController", ["$scope",function(m){
 	m.nombre = "Roberth";
 	m.nuevoComentario = {};
 	m.comentarios = [
	 	{
	 		comentario: "Buen tutorial",
	 		username: "roberthx2" 
	 	},
	 	{
	 		comentario: "Malisimo el tutorial",
	 		username: "vegeta"
	 	}
 	];
 	m.agregarComentario = function(){
 		m.comentarios.push(m.nuevoComentario);
 		m.nuevoComentario = {};
 	}
 }]);
