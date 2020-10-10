var mongoose = require('mongoose');
var dbHost = 'mongodb://localhost:27017/Patients';
mongoose.connect(dbHost, { useNewUrlParser: true } );
mongoose.connection;
mongoose.set('debug', true);
var patientSchema = mongoose.Schema( {
    firstName: String,
    lastName: String,
    phoneNumber: String,
    emailAddress: String,
    dateOfBirth: Date,
    address: String   
});
var Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;