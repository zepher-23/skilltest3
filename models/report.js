 
const mongoose = require("mongoose")


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
    patientId:{type:mongoose.Schema.Types.ObjectId,required:true}
})

const Report = mongoose.model('Report', reportSchema)

module.exports = Report
