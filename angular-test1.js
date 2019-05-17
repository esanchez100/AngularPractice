function CartController($scope) { 
    // array of items
    $scope.items = [
              {title: 'Paint pots', quantity: 8, price: 3.95},
              {title: 'Polka dots', quantity: 17, price: 12.95},
              {title: 'Pebbles', quantity: 5, price: 6.95}
  ];
//   function that is called on onClick
  $scope.remove = function(index) { $scope.items.splice(index, 1);
  } }