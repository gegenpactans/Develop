mainControllers.factory("metricInfoService", function($http, $q) {
    var data = {};
    data.getmetricData = function() {
        var defer = $q.defer();
        $http.get("Json/metricInfo.json")
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
