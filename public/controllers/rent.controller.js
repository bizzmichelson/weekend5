myApp.controller('RentController', function(RentService){
    var vm = this;
    RentService.getRent().then(function(response){
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
        RentService.addRent(rentToAdd);
    };

    vm.handfulOfRent = RentService.rentStuff;

})




// db.getCollection('listings').find({rent: {$exists:true}});