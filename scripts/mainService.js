angular.module('app')
.service('mainService', function($http){

  this.getData = function(){
  return $http.get("https://www.reddit.com/r/news/.json?sort=top&t=day&limit=15")
  };

  this.getPics = function(){
  return $http.get("https://www.reddit.com/r/earthporn/.json?sort=top&t=day&limit=15")
  };

  this.getSmmry = function(url){
    return $http({
      method: 'GET',
      url: 'http://api.smmry.com/&SM_API_KEY=76E43EEBEE&SM_URL=' + url
    })
  }

});
