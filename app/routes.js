var path = require('path');
var Patient = require('./model');
var routes = function(app) {
    app.get('/patient', function(req, res) {
        Patient.find({}, function(err, result) {
            if ( err ) throw err;
            res.json(result);
        });
    });
    app.post('/patient', function(req, res) {
        var patient = new Patient( {
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            phoneNumber:req.body.phoneNumber,
            emailAddress:req.body.emailAddress,
            dateOfBirth:req.body.dateOfBirth,
            address:req.body.address
        });
        patient.save(function(err, result) {
            if ( err ) throw err;
            res.json( {
                message:"Successfully added patient",
                patient:result
            });
        });
    });
    app.delete("/patient/:_id", function(req, res) {
        Patient.findOneAndRemove(req.query, function(err, result) {
            if ( err ) throw err;
            res.json( {
                message: "Successfully deleted the patient",
                patient: result
            });
        });
    });
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname + '/public', 'index.html'));
    });
};
module.exports = routes;