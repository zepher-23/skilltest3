const express = require("express")
const app = express();
const mongoose = require('mongoose')
const db = require('./db')
const Doctor = require('./models/doctor')
const patient = require("./routes/patient")
const doctor = require('./routes/doctor');
const report = require('./routes/report');
const cookieParser = require('cookie-parser')

// code to parse reuest body
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cookieParser())
// home page response
app.get("/", (req, res) => {
    res.send("started")
})


// three routes doctor, patient and report
app.use("/doctors", doctor)
app.use("/patients", patient)
app.use("/reports",report)

// server listens to port 3000
app.listen(3000, () => {
    console.log("server started at port 3000")
})

