mainControllers.controller('MetricInfoCtrl', ['$scope', 'metricInfoService', function($scope, metricInfoService) {

    $scope.showMetricDetails = function() {
        metricInfoService.getmetricData().then(function success(res) {
            $scope.metricInfo = res;
            console.log($scope.metricInfo);
        }, function error() {

        })
    };
    $scope.showMetricDetails();

}]);
