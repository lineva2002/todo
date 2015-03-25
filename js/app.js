var todoApp = angular.module('TodoApp', []);


todoApp.run([function(){
	if(localStorage.todoAppData === undefined){
			var todoAppData = {nextID: 1, todos: []};
		localStorage.setItem('todoAppData', angular.toJson(todoAppData));
	}
}]);