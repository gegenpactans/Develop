mainControllers.controller('homeCtrl', ['$scope', 'notificationDetailService', function($scope, notificationDetailService) {

        $scope.getData = function() {
            notificationDetailService.getJson().then(function(res) {
                $scope.notificationDetail = res;
                $scope.icon = function(index) {

                    if ($scope.notificationDetail[0].attention[index].health == 'critical') {
                        return 'glyphicon glyphicon-warning-sign yellow ';
                    } else
                        return 'glyphicon glyphicon-ban-circle red';
                }

            }, function(error) {

            });
        }
        $scope.getData();

    }

]);
