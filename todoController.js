// var myAppModule = angular.module('myApp', []);
// myAppModule.controller('TextController', function($scope) {
// var someText = {};
// someText.message = 'You have started your journey.'; 
// $scope.someText = someText;
// });

var myApp= angular.module('myApp', []);
    myApp.controller('HeaderController', function($scope){
      $scope.welcome= 'Welcome! Please enter your to do item.';
      $scope.items=[];
      $scope.toDo='';
      $scope.addClick= function(item){
          //pushes into the list array the item that has been entered 
          //the input with ng-model='item'
        //   $scope.items.push($scope.item.enteredItem);
          $scope.items.push({
            done: false,
            item: item
          });
          //clears the input field
          $scope.toDo= '';
        //   $scope.items.push($scope.item.done);
      }
      
      $scope.removeItem= function(item){
          console.log("this is the button that is being clicked", item)
          var i=$scope.items.indexOf(item)
          $scope.items.splice(i,1)
      }
    })




