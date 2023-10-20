// app.controller('carController', function($scope, myService) {
    angular.module('myApp').controller('myController', function ($scope, myService) {
    $scope.cars = [];
    $scope.currentCar = {};

    // Get all cars from the REST API
    myService.getCars().then(function(response) {
        $scope.cars = response.data;
    });

    $scope.addCar = function() {
        if ($scope.currentCar.id) {
            // Update an existing car
            myService.updateCar($scope.currentCar).then(function(response) {
                // Handle the response as needed
            });
        } else {
            // Add a new car
            myService.addCar($scope.currentCar).then(function(response) {
                // Handle the response as needed
                $scope.cars.push(response.data);
            });
        }

        // Clear the form
        $scope.currentCar = {};
    };

    $scope.editCar = function(car) {
        // Set the current car for editing
        $scope.currentCar = angular.copy(car);
    };

    $scope.deleteCar = function(car) {
        myService.deleteCar(car).then(function(response) {
            // Handle the response as needed
            var index = $scope.cars.indexOf(car);
            $scope.cars.splice(index, 1);
        });
    };
});


// carController.js
// app.controller('carController', function(myService) {
//     $scope.cars = [];
//         $scope.currentcar = {};
//         $scope.currentcar.id = 0;

//     // Get all cars from the REST API
//     myService.getAll().then(function(response) {
//         ctrl.cars = response.data;
//     });

//     ctrl.addCar = function() {
//         if (ctrl.newCar.id) {
//             // Update existing car
//             myService.updatecar(ctrl.newCar).then(function(response) {
//                 // Handle response as needed
//             });
//         } else {
//             // Add a new car
//             myService.addcar(ctrl.newCar).then(function(response) {
//                 // Handle response as needed
//                 ctrl.cars.push(response.data);
//             });
//         }

//         // Clear the form
//         ctrl.newCar = {};
//     };

//     ctrl.updateCar = function(car) {
//         // Set the current car for editing
//         ctrl.newCar = angular.copy(car);
//     };

//     ctrl.deleteCar = function(car) {
//         myService.deletecar(car).then(function(response) {
//             // Handle response as needed
//             var index = ctrl.cars.indexOf(car);
//             ctrl.cars.splice(index, 1);
//         });
//     };
// });
