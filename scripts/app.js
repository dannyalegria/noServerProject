angular.module("app", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './views/home.html'
  })
  .state('weather',{
    url: '/weather',
    templateUrl: './views/weather.html'
  })
  .state('tasks',{
    url: '/tasks',
    templateUrl: './views/tasks.html'
  })
  .state('news',{
    url: '/news',
    templateUrl: './views/news.html'
  })
  .state('pics',{
    url: '/pics',
    templateUrl: './views/pics.html'
  });

});

// angular.module('routing',['ui.router'])
// .config(function($stateProvider, $urlRouterProvider){
//
//   $urlRouterProvider.otherwise('/');
//
//   $stateProvider
//   .state('home', {
//     url: '/',
//     templateUrl: './home.html'
//   })
//   .state('signup',{
//     url: '/signup',
//     templateUrl: './signup.html'
//   })
//   .state('details',{
//     url: '/details',
//     templateUrl: './details.html'
//   })
//
// });
