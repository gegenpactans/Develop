mainControllers.factory("notificationDetailService", function($http, $q) {
    var data = {};
    data.getJson = function() {
        var defer = $q.defer();
        $http.get("Json/notification.json")
            .success(function(res) {

                defer.resolve(res);
            })
            .error(function(err, status) {
                defer.reject(err);
            })
        return defer.promise;
    }
    return data;
});
