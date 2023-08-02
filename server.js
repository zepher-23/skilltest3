const express = require("express")
const app = express();
const mongoose = require('mongoose')
const db = require('./db')
const Doctor = require('./models/doctor')
const patient = require("./routes/patient")
const doctor = require('./routes/doctor');
const report = require('./routes/report');




app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/", (req, res) => {
    res.send("started")
})



app.use("/doctors", doctor)
//
app.use("/patients", patient)
app.use("/reports",report)


app.listen(3000, () => {
    console.log("server started at port 3000")
})

