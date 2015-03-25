todoApp.controller('TodoCtrl', ['$rootScope','$scope', function($rootScope,$scope){
	var todoAppData = angular.fromJson(localStorage.todoAppData);
	$scope.todos = todoAppData.todos;
	$scope.newTodo = {id: todoAppData.nextId, content:'', done:'0'};

	$scope.add = function(todo){
		todoAppData.nextID++;
		todoAppData.todos.push(todo);
		localStorage.setItem('todoAppData', angular.toJson(todoAppData));
		$scope.newTodo = {id: todoAppData.nextID, content:'', done:'0'};
		$rootScope.$broadcast('show-alert', {type: 'success', msg: '新增成功！'});
	};
	$scope.toggle = function(todo){
		var index = $scope.todos.indexOf(todo);
		$scope.todos[index].done = (todo.done === '0') ? '1':'0';
		localStorage.setItem('todoAppData', angular.toJson(todoAppData));
	};

$scope.remove = function(todo){
		var index = $scope.todos.indexOf(todo);
		$scope.todos.splice(index, 1);
		localStorage.setItem('todoAppData', angular.toJson(todoAppData));
		$rootScope.$broadcast('show-alert', {type: 'warning', msg: '刪除成功！'});
	};


}]);