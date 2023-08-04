const Report = require("../models/report")
const { report } = require("../routes/patient")


//function to get all report info
const getStatusReport =async (req, res) => {
    const status = req.params.status

    const reports =await Report.find({ status: status })
    
    if (reports) {
        console.log(reports)
        res.json(reports)
    }
    
}

module.exports = {getStatusReport}