mainControllers.factory("machineListService", function($http, $q) {
    var data = {};
    data.getJson = function() {
        var defer = $q.defer();
        $http.get("Json/machineList.json")
            .success(function(res) {
                data.macList = res;
                defer.resolve(res);
            })
            .error(function(err, status) {
                defer.reject(err);
            })
        return defer.promise;
    }
    return data;
});
