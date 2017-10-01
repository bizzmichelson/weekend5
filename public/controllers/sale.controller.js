// db.getCollection('listings').find({cost: {$exists:true}});

myApp.controller('SaleController', function(SalesService){
    var vm = this;
    SalesService.getSales().then(function(response){
        vm.sales = response.data;
        return console.log('getting rentals', vm.sales);

    }).catch(function(err){
        return console.error(err);
    })
    console.log('SaleController');

    vm.addSales = function() {
        console.log('in addSales of Rent Controller');
        var salesToAdd = {
            sqft: sqftIn,
            city: cityIn,
            cost: costIn 
        };
        SalesService.addSales(salesToAdd);
    };

    vm.handfulOfSales = SalesService.salesStuff;

})