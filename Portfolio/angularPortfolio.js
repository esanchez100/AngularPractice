var portfolioApp = angular.module('myPortfolio', ['ui.router']);

// this is what will route to other pages that are specified below
// portfolioApp.config(function($routeProvider) {
//     $routeProvider

//         // route for the home page
//         .when('/', {
//             templateUrl : 'home.html',
//             controller  : 'mainController'
//         })

//         // route for the about page
//         .when('/about', {
//             templateUrl : 'about.html',
//             controller  : 'aboutController'
//         })

//         // route for the contact page
//         .when('/contact', {
//             templateUrl : 'contact.html',
//             controller  : 'contactController'
//         })

//          .when('/projects', {
//              tempUrl : 'projects.html',
//              controller : 'projectsController'
//          });
//     });
     // create the controller and inject Angular's $scope
     portfolioApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    portfolioApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    portfolioApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });

    portfolioApp.controller('projectsController', function($scope) {
        $scope.message = 'Project page. This is the project page.';
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
    }]);
