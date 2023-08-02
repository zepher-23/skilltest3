const express = require('express')
const router = express.Router()
const doctor = require('../controllers/doctor')
const bcrypt = require('bcrypt')
router.post('/login', doctor.login)
router.post('/register', doctor.register)



module.exports = router