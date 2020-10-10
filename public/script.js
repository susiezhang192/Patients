var app = angular.module('patientApp', []);
app.controller('patientCtrl', function($scope, $http) {
    var getData = function() {
        return $http( {
            method: 'GET',
            url: '/patient'
        }).then(function successCallback(response) {
            $scope.patients = response.data;
        }, function errorCallback(response) {
            console.log('Error: ' + response);
        });
    };
    getData();
    $scope.del_patient = function(patient) {
        $http( {
            method: 'DELETE',
            url: '/patient/:_id',
            params: {'_id': patient._id}
        }).then(function successCallback(response) {
            console.log(response);
            return getData();
        }, function errorCallback(response) {
            console.log('Error: ' + response);
        });
    };
    $scope.add_patient = function() {
        var body = '{ "firstName": "' + $scope.FirstName +
        '", "lastName": "' + $scope.LastName +
        '", "phoneNumber": "' + $scope.PhoneNumber +
        '", "emailAddress": "' + $scope.EmailAddress +
        '", "dateOfBirth": "' + $scope.DateOfBirth +
        '", "address": "' + $scope.Address + '" }';
        $http({
            method: 'POST',
            url: '/patient',
            data: body
        }).then(function successCallback(response) {
            console.log(response);
            return getData();
        }, function errorCallback(response) {
            console.log('Error: ' + response);
        });
    };

    $scope.submit = function(){
        $scope.submitted = true;
      } 
});


