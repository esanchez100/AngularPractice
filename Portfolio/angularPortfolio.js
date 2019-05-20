var portfolioApp = angular.module('myPortfolio', ['ngRoute']);

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

