var questApp = angular
  .module("questApp", ["ngRoute"])
  .config(function($routeProvider) {
    $routeProvider.when("/second", {
      templateUrl: "./second.html",
      controller: "AnswerController"
    });
    $routeProvider.when("/first", {
      templateUrl: "./first.html",
      controller: "AnswerController"
    });
    $routeProvider.otherwise({ redirectTo: "/second" });
  });
