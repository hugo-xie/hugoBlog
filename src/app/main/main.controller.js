export default ($scope) => {
    'ngInject';
    var i = 1;
    $scope.page1 = true;
    $scope.test = () =>{
      if (i<3) {
        $scope.page0 = false;
        $scope.page1 = false;
      $scope.page2 = false;
      $scope.page3 = false;
        i = i+1; 
        let b = "page"+i;
        $scope[b] = true;

      }
    }
    $scope.minus = () =>{
      if (1<i<4) {
        $scope.page0 = false;
        $scope.page1 = false;
      $scope.page2 = false;
      $scope.page3 = false;
        i = i-1; 
        let b = "page"+i;
        $scope[b] = true;

      }
    }
}
