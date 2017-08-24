angular.module('App')
.controller('DetailController',function($scope,$stateParam,$state,
	Currencies){
	angular.forEach(Currencies,function(currency{
		if(currency.code==$stateParam.currency){
			$scope.currency = currency;
		}
	});
	if (angular.isUndefined($scope.currency.ticker)) {
		$state.go('tabs.rates');
	}
});