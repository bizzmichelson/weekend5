myApp.controller('RentController',['listingService', function(listingService){
    var vm = this;
    listingService.getRent().then(function(response){
        vm.rentals = response.data;
        return console.log('getting rentals', vm.rentals);

    }).catch(function(err){
        return console.error(err);
    })
    console.log('RentController');

    vm.addRent = function() {
        console.log('in addRent of Rent Controller');
        var rentToAdd = {
            sqft: sqftIn,
            city: cityIn,
            rent: rentIn 
        };
        listingService.addRent(rentToAdd);
    };

    vm.handfulOfRent = listingService.rentStuff;

}])




// db.getCollection('listings').find({rent: {$exists:true}});