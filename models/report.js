 
const mongoose = require("mongoose")

//define report schema
const reportSchema = mongoose.Schema({
    doctor: { type: String, required: true },
    status: {
        type: String,
        required: true,
        enum:
            [
                "Negative",
                "Travelled - Quarantine",
                "Symptoms - Quarantine",
                "Positive - Admit",
            ]
    },

    date: { type: String, required: true },
    //use patient model for id reference 
    patientId:{type:mongoose.Schema.Types.ObjectId,required:true}
})

//create report model using the defined schema 
const Report = mongoose.model('Report', reportSchema)

module.exports = Report
