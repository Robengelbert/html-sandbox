<!DOCTYPE html>
<html lang="en" ng-app="myApp">

	<head>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>


		<script src="angular/controllers/todo-controller.js"></script>
		<script src="angular/todo-app.js"></script>


	</head>

	<body>
		<main class="container">
			<div class="row" ng-controller="todoCtrl">
				<h1>My todo's</h1>
				<form ng-submit="todoAdd()">
					<input type="text" ng-model="todoInput" size="50" placeholder="Add New">
					<input type="submit" value="Add New">
				</form>
				<br>
				<div ng-repeat="item in todoList">
					<input type="checkbox" ng-model="item.done">
					<span ng-bind="item.todoText"></span>
					<button ng-click="remove()">Remove marked</button>
				</div>
			</div>
		</main>
	</body>

</html>
