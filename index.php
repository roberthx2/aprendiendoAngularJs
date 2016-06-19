<!DOCTYPE html>
<html ng-app="MiModulo">
<head>
	<meta charset="UTF-8">
	<title>Hola Controller</title>
	<script src="angular/angular.js">  </script>
	<script src="controller/controller.js"></script>
</head>
<body ng-controller="MiController">
	<label>Comentario</label>
	<input type="text" ng-model="nuevoComentario.comentario"><br>
	<label>Username</label>
	<input type="text" ng-model="nuevoComentario.username"><br>
	<button ng-click="agregarComentario()">Agregar Comentario</button>
	<h3>Comentarios</h3>
	<ul>
		<li ng-repeat="comentario in comentarios">
			{{comentario.comentario}} - <strong>{{comentario.username}}</strong>
		</li>
	</ul>
</body>
</html>