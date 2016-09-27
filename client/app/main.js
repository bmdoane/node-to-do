'use strict'

angular.module('nodeToDo', ['ngRoute'])
	.config($routeProvider =>
		$routeProvider
			.when('/', {
				controller: 'MainCtrl',
				templateUrl: 'partials/main.html',
			})
			.when('/todo', {
				controller: 'ToDoCtrl',
				templateUrl: 'partials/todo.html',
			})			
	)
	.controller('MainCtrl', function($scope, $http) {
		$http
			.get('/api/title')
			.then(({ data: { title }}) =>
				$scope.title = title
			)
	})
	.controller('todo', function($scope, $http) {
		$http
			//.get('/api/todo')
	})	