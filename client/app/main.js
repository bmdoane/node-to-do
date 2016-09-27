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
	.controller('ToDoCtrl', function($scope, $http) {
    $http
      .get('/api/todos')
      .then(({ data: { todos }}) =>
        $scope.todos = todos
      )
	})	