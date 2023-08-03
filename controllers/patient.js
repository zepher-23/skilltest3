
const Patient = require("../models/patient")
const Report = require("../models/report")

const register = async (req, res) => {

    const { phone } = req.body
    Patient.findOne({ phone: phone }).then(patient => {
        if (patient) {
            res.send("patient exists")
        }
        else {
            const newPatient = new Patient({ phone: phone })
            newPatient.save().then(() => {
                Patient.findOne({ phone: phone }).then(patient => {
                    const id = patient.id
                    res.send("patient id is: "+id)
                }).catch(err => {
                    res.send("error finding patient id")
                })
            }).catch(err => {
                res.send("error saving patient")
            })
        }
    })
    
}

const createReport = async (req, res) => {
  try {
    const patientId = req.params.id;
    const {doctor, status, date} = req.body;

    const newReport = new Report({
      doctor,
      status,
      date,
      patientId
    });

    // Save the newReport document and get the saved report ID
      const report = await newReport.save();
      

    // Find the patient by ID and update the reportId array
    
    console.log(patientId);
    console.log(doctor, status, date);
    res.json({ doctor: doctor, status: status, date: date,patientId:patientId});
  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).json({error: 'Something went wrong'});
  }
};


const allReport = async (req, res) => {
    const id = req.params.id;

    const patientReports = await Report.find({ patientId: id })
    console.log(patientReports)
    res.json(patientReports)
    
}


module.exports = { register,createReport,allReport }