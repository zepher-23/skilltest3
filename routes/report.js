const express = require('express')
const router = express.Router()
const report = require("../controllers/report")


// one route to get all reports
router.get('/:status', report.getStatusReport) // not protected


module.exports = router