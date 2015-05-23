angular.module("Directive",[]);

angular.module("Directive").controller("DirectiveController",function($scope){

});

angular.module("Directive").directive("izpisZnakov", function(){
	return {
		restrict:"AEC",
		scope:{},
		template: "<div class=\"col-md-4\"><div class=\"well\" style=\"height:150px;\"><center><label for=\"number\">Text:</label><textarea class=\"form-control\" name=\"number\" style=\"width:300px;\" ng-model=\"number\" id=\"number\" ng-required=\"true\"></textarea><p ng-class=\"{\'text-danger\': number.length > 10, \'text-success\':number.length<=10}\">To je vaše število:{{number.length}}</p></center></div></div>"
	};
});

angular.module("Directive").directive("prijavaNewsletter", function(){
	return {
		restrict:"E",
		scope:{
			placeholder:"@",
			btntext:"@"
		},
		template:"<div class=\"col-md-4\"><div class=\"well\" style=\"height:150px;\"><input class=\"form-control\" ng-model=\"email\" ng-required=\"true\" placeholder=\"{{placeholder}}\"/><button class=\"btn btn-primary\" style=\"margin:10px;\" type=\"submit\">{{btntext}}</button></div></div>"
	};
});

angular.module("Directive").directive("mesec", function(){
	return {
		restrict: "E",
		scope:{
			number: "="
		},
		template: "<div class=\"col-md-4\"><div class=\"well\" style=\"height:150px;\">{{mesec}}</div></div>",
		controller: function($scope){
			switch($scope.number){
				case 1:
					$scope.mesec = "Januar";
					break;
				case 2:
					$scope.mesec = "Februar";
					break;
				case 3:
					$scope.mesec = "Marec";
					break;
				case 4:
					$scope.mesec = "April";
					break;
				case 5:
					$scope.mesec = "May";
					break;
				case 6:
					$scope.mesec = "Junij";
					break;
				case 7:
					$scope.mesec = "Julij";
					break;
				case 8:
					$scope.mesec = "Avgust";
					break;
				case 9:
					$scope.mesec = "September";
					break;
				case 10:
					$scope.mesec = "Oktober";
					break;
				case 11:
					$scope.mesec = "November";
					break;
				case 12:
					$scope.mesec = "December";
					break;
				default:
					$scope.mesec = undefined;


			}
		}
	};
});