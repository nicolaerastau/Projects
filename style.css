var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);

animateApp.config(function($routeProvider) {
    $routeProvider
    	  $routeProvider.when('/', {
    		templateUrl: 'page-home.html',
            controller: 'mainController'
    	})
    	  $routeProvider.when('/about', {
    		templateUrl: 'page-about.html',
            controller: 'aboutController'
    	})
    	  $routeProvider.when('/contact', {
    		templateUrl: 'page-contact.html',
            controller: 'contactController'
    	});
        $routeProvider.when('/projects', {
    	   	templateUrl: 'page-projects.html',
               controller: 'projectsController'
    	  });
       $routeProvider.otherwise({redirectTo:'/'})

});

animateApp.controller('mainController', function($scope) {
    $scope.pageClass = 'page-home';
});

animateApp.controller('aboutController', function($scope) {
    $scope.pageClass = 'page-about';
});

animateApp.controller('contactController', function($scope) {
    $scope.pageClass = 'page-contact';
});
animateApp.controller('projectsController', function($scope) {
     $scope.pageClass = 'page-projects';
 });
