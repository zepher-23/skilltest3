const mongoose = require('mongoose')


//define patient schema
const patientSchema = mongoose.Schema({
    phone: { type: String, required: true },
});

//create patient model using schema
const Patient = mongoose.model('Patient', patientSchema)

module.exports = Patient;
