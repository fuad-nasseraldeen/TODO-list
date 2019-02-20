// Angularjs App Module
var app = angular.module('app', ['ngStorage', '720kb.datepicker']);

// Todo Angularjs Controller
app.controller('todoController', function($scope, $localStorage){
    // Default Storage 
    if($localStorage.todos == null){
        console.log("First Create For The Todo Storage.");
        $localStorage.todos = []; 
    }

    // local todos store local storage data
    $scope.todos = $localStorage.todos;

    // Add new todo
    $scope.addTodo = function(){
        $localStorage.todos.push({'title': $scope.newTodo, 'date': $scope.date, 'done': false});
        $scope.newTodo = "";
        $scope.date = "";
    }

    // remove only the checked completed 
    $scope.clearCompleted = function(){
        $localStorage.todos = $localStorage.todos.filter(function(item){
            return !item.done;
        });
        location.reload();
    }

    // remove selected item
    $scope.removeTodo = function(todo){
        angular.forEach($localStorage.todos, function(value, key) {
            if(value.title == todo.title){
                $localStorage.todos.splice(key, 1);
            }
        });
    }
});