'use strict'

angular.module('nodeToDo', [])
	.controller('main', function($scope, $http) {
		$http
			.get('/api/todo')
			.then(({ data: { todo }}) =>
				$scope.todo = todo
			)
	})