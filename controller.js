// var myAppModule = angular.module('myApp', []);
// myAppModule.controller('TextController', function($scope) {
// var someText = {};
// someText.message = 'You have started your journey.'; 
// $scope.someText = someText;
// });

var myApp= angular.module('myApp', []);
    myApp.controller('HeaderController', function($scope){
      $scope.welcome= 'Welcome!';
      $scope.items=[];
      $scope.addClick= function(){
          //pushes into the list array the item that has been entered 
          //the input with ng-model='item'
          $scope.items.push($scope.enteredItem);
          //clears the input field
          $scope.enteredItem= '';
      }
      
      $scope.removeItem= function(item){
          console.log("this is the button that is being clicked", item)
          var i=$scope.items.indexOf(item)
          $scope.items.splice(i,1)
      }
    })




