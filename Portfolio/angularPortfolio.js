var portfolioApp = angular.module('myPortfolio', ['ui.router']);

     // create the controller and inject Angular's $scope
     portfolioApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    portfolioApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    portfolioApp.controller('contactController', function($scope) {
        $scope.message = 'Listed below are the list of ways to contact me';

    });

    portfolioApp.controller('projectsController', function($scope) {
        $scope.message = 'Welcome to my project page! Here you can find personal projects that I have worked on over the past months.';
    });

    portfolioApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
        // For any unmatched url, send to /business
        $urlRouterProvider.otherwise("#")
         
        $stateProvider
                // .state('#', {//State demonstrating Nested views
                    // url: "main",
                    // templateUrl: "angularPortfolio.html",
                    // controller  : function ($scope){
                    //     $scope.message= "This is the homepage"
                    // }
                // })  
                .state('#', {//State demonstrating Nested views
                    url: "/home",
                    templateUrl: "home.html",
                    // you could define the controller in line as well
                    controller  : 'mainController'
                })
                .state('about', {//State demonstrating Nested views
                    url: "/about",
                    templateUrl: "about.html",
                    controller  : 'aboutController'
                })    
                .state('contact', {//State demonstrating Nested views
                    url: "/contact",
                    templateUrl: "contact.html",
                    controller  : 'contactController'
                })
                .state('projects', {//State demonstrating Nested views
                    url: "/projects",
                    templateUrl: "projects.html",
                    controller  : 'projectsController'
                })    
    }])
// this will pull in my directive
    portfolioApp.directive('myCard', function() {
        return {
            restrict:"E",
            templateUrl: "/Portfolio/directives/card.directive.html",
            scope: {
                myUrl: '@', // binding strategy
                cardTitle:'@',
                description:'@'
            }
        }
    }); 