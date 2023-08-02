const Report = require("../models/report")

const getStatusReport =async (req, res) => {
    const status = req.params.status

    const reports =await Report.find({ status: status })
    
    if (reports) {
        console.log(reports)
        res.send("found reports with the specified status ")
}
}

module.exports = {getStatusReport}