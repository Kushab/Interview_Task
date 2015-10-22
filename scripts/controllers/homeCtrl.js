angular.module('movieApp')
.controller('homeCtrl',function($scope,$http,$location,movieData){
	$scope.movies = [];
	$scope.startPage = 0;
	$scope.arrow = "glyphicon glyphicon-arrow-up";
	$scope.sortDirect = '';
    $scope.sortOrder ='date';
	$http.get('data/dma-interview.json')
	.success(function(resp){
		$scope.movies = resp.items;
	})
	.error(function(e){
		alert('error connecting to server...');
	});
    //Arrow Change for ascending and descending the sort order results
	$scope.arrowChange = function(){
		if ($scope.arrow == 'glyphicon glyphicon-arrow-up'){
			$scope.arrow = 'glyphicon glyphicon-arrow-down';
			$scope.sortDirect = '-';
		}else{
			$scope.arrow = 'glyphicon glyphicon-arrow-up';
			$scope.sortDirect = '+';
		}
	}
	//load next page data
	$scope.nextPage = function(mov){
		movieData.mov = mov;
		console.log(movieData.mov);
		$location.path('/detail');
	}
	//Pagination
    $scope.imgSrc = 'pagination_circle.png';
    $scope.imgSrc1 = 'pagination_circle.png';
    $scope.imgSrc2 = 'pagination_circle.png';
    
    changePagination();
    
    $scope.$watch('startPage', function() {
     	changePagination();
   });
     function changePagination(){
     	if($scope.startPage == 0){
	    	 $scope.imgSrc = 'product_pagination.png';
	    	 $scope.imgSrc1 = 'pagination_circle.png';
	    	 $scope.imgSrc2 = 'pagination_circle.png';
	    }

	    if($scope.startPage == 5){
	    	 $scope.imgSrc = 'pagination_circle.png';
	    	 $scope.imgSrc1 = 'product_pagination.png';
	    	 $scope.imgSrc2 = 'pagination_circle.png';
	    }
	    if($scope.startPage == 10){
	    	 $scope.imgSrc = 'pagination_circle.png';
	    	 $scope.imgSrc1 = 'pagination_circle.png';
	    	 $scope.imgSrc2 = 'product_pagination.png';
	    }
	}
})