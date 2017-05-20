angular.module('shop').controller('myCtrl',function($scope) {

  $scope.products = [{"p" :"milk","state":false,"quantity" : 1},{"p":"fruit","state":false,"quantity" : 1}];
      $scope.changeState = function(y) {
        $scope.products[y].state = $scope.products[y].state === false ? true : false;
    }

/* Add function*/
$scope.add = function() {
  //alert("success");
  var myObj = $scope.products;
  $scope.error="";
if($scope.new1===""||$scope.quant==null) { $scope.error="Enter all details to add"}
  else {
    var availflag = false
  angular.forEach(myObj, function(value,key) {
    if (value.p===$scope.new1)
      {
        availflag = true;
      }
  });

    if(availflag) {
      //alert("gskgbs");
      $scope.error = "Already on List";
    }
    else {
      var newObj ={p:$scope.new1,state:false,quantity:$scope.quant};
      console.log(newObj);
  $scope.products.push(newObj);
    $scope.new1=""
    $scope.quant=""
    $scope.error="Item added";
    }
  }
  }
//
//Remove function
//
  $scope.remove = function(x) {
    $scope.error="";
    $scope.products.splice(x,1);
  };
});
