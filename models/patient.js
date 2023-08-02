const mongoose = require('mongoose')

const patientSchema = mongoose.Schema({
    phone: { type: String, required: true },
});

const Patient = mongoose.model('Patient', patientSchema)

module.exports = Patient;
