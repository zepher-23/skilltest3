const express = require("express")
const router = express.Router()
const Authenticate = require('../controllers/authenticate')

const patient = require('../controllers/patient')

//specific routes for each operation
router.post('/register',Authenticate.auth, patient.register) //protected
router.post('/:id/create_report',Authenticate.auth, patient.createReport) //protected
router.get('/:id/all_reports',Authenticate.auth, patient.allReport) //protected

module.exports = router