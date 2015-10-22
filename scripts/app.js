angular.module('movieApp',['ngRoute'])
.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl:'templates/home.html',
		controller:'homeCtrl'
	})
	 .when('/detail', {
		templateUrl:'templates/detail.html',
	 	controller:'detailCtrl'
	 })
	.otherwise({ redirectTo: '/'});
})
.service('movieData',function(){
	this.mov = {};
});