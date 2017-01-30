angular.module("app")
.controller("mainController", function($scope, $http, mainService, weatherService,websitesService){

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  $scope.date = new Date();

  mainService.getData().success(function(response){
      $scope.data = response.data.children;
      // console.log(response.data.children);
    });

  mainService.getPics().success(function(response){
      $scope.pics = response.data.children;
      console.log(response.data.children);
    });

  $scope.getSmmry = function(item){
    if (!item.smmry) {
      mainService.getSmmry(item.data.url).then(function(response){
        item.smmry = response.data.sm_api_content;
        // console.log(response.data.sm_api_content);
      });
    }
  }

  weatherService.getProvoWeather().then(function(response){
    $scope.provoWeather = response.data.query.results.channel;
    var weatherCode = response.data.query.results.channel.item.condition.code;
    $scope.icon = weatherService.iconFunction(weatherCode);
  });

  weatherService.getSfWeather().then(function(response){
    $scope.sfWeather = response.data.query.results.channel;
    var weatherCode = response.data.query.results.channel.item.condition.code;
    $scope.icon = weatherService.iconFunction(weatherCode);
  });

  $scope.sites = websitesService.array;

  var todoList = this;
  todoList.todos = [];

  todoList.addTodo = function() {
    todoList.todos.push({text:todoList.todoText, done:false});
    todoList.todoText = '';
  };

  todoList.remaining = function() {
    var count = 0;
    angular.forEach(todoList.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  todoList.archive = function() {
    var oldTodos = todoList.todos;
    todoList.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) todoList.todos.push(todo);
    });
  };

  $scope.CurrentDate =  new Date();


});
