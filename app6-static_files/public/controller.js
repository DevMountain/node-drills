(function() {
	'use strict';

	angular
	  .module('app6')
	  .controller('mainCtrl', mainCtrl);

	mainCtrl.$inject = ['$scope'];

	function mainCtrl($scope) {
		$scope.greeting = "Congrats!"
	}
})();