mainControllers.factory("alertDetailsService", function($http, $q) {
    var data = {};
    data.getalertData = function() {
        var defer = $q.defer();
        $http.get("Json/alertDetails.json")
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
