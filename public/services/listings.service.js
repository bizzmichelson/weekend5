myApp.service('RentService', ['$http',function($http) {
    var rs = this;


    console.log('rent service');

    rs.getRent = function(rent) {
       return $http({
            method: 'GET',
            url: '/properties/rental'
        })
    
    }
    return rs;
}])
