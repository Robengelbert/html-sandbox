
app.controller("todoCtrl",["$scope", function($scope){$scope.todoList =[];

	$scope.todoAdd = function(){

		$scope.todoList.push({todoText:$scope.todoInput, done:false});
		$scope.todoInput="";
	};

	$scope.remove = function(){
		var oldList = $scope.todoList;
		$scope.todoList = [];
		angular.forEach(oldList, function(item){
			if(!item.done)
				$scope.todoList.push(item);
		});
	};
}]);




/*app.controller("todoCtrl", ["$scope", "HolaService", function($scope, HolaService) {
 //state variables
 $scope.hola = null;
 //methods
 $scope.sayHola = function(){
 return("Hola Plunker!");
 };

 $scope.getHolaFromService = function() {
 HolaService.fetch()
 .then(function(result){
 if(result.data.status === 200){
 $scope.hola = result.data.data;
 } else {
 $scope.hola = ["Service did not return data :("];
 }
 });
 };

 if($scope.hola === null){
 $scope.getHolaFromService();
 }
 }]);*/