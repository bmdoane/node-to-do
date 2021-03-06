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
		$scope.addToDo = () => {
			const todo = {
				task: $scope.task,
				dueDate: $scope.dueDate,
				assignedTo: $scope.assignedTo,
			}
			$http
				.post('/api/todos', todo)
				.then(() => $scope.todos.push(todo))
				.catch(console.error)
		}
    $http
      .get('/api/todos')
      .then(({ data: { todos }}) =>
        $scope.todos = todos
      )
	})	