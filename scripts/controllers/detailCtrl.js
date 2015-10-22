 angular.module('movieApp')
 .controller('detailCtrl',function($scope,$location,movieData){
 	$scope.movie = movieData.mov;
 });