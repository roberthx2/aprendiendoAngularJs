angular.module("http",[])
	.controller("httpController", function($scope, $http){
		$scope.posts = [];
		$scope.newPost = {};
		$http.get("http://jsonplaceholder.typicode.com/posts")
			.success(function(data){
				console.log(data);
				$scope.posts = data;
			})
			.error(function(err){

			});

		$scope.addPost = function(){
			$http.post("http://jsonplaceholder.typicode.com/posts",{
				title: $scope.newPost.title,
				body: $scope.newPost.body,
				userid: $scope.newPost.userid
			})
			.success(function(data, status, headers, config){
				$scope.posts.push($scope.newPost);
				$scope.newPost = {};
			})
			.error(function(error){
				console.log(error);
			});
		}
	});