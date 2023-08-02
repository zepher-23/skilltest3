const express = require("express")
const router = express.Router()

const patient = require('../controllers/patient')


router.post('/register', patient.register) //protected
router.post('/:id/create_report', patient.createReport) //protected
router.get('/:id/all_reports',patient.allReport) //protected

module.exports = router