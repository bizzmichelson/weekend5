// db.getCollection('listings').find({cost: {$exists:true}});

myApp.controller('SaleController', ['listingService',function(listingService){
    var vm = this;
    listingService.getSales().then(function(response){
        vm.sales = response.data;
        return console.log('getting sales', vm.sales);

    }).catch(function(err){
        return console.error(err);
    })
    console.log('SaleController');

    vm.addSales = function() {
        console.log('in addSales of Sale Controller');
        var salesToAdd = {
            sqft: sqftIn,
            city: cityIn,
            cost: costIn 
        };
        listingService.addSales(salesToAdd);
    };

    vm.handfulOfSales = listingService.salesStuff;

}])