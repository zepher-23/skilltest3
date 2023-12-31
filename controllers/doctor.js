const Doctor = require("../models/doctor")
const authenticate = require("../controllers/authenticate")
const bcrypt = require('bcrypt')

//function to register the doctor in the database
const register = async (req, res) => {
    const { username, password } = req.body;
    try {
        const newDoctor = new Doctor({
            name: username,
            password: password
        })

        Doctor.findOne({ name: username, }).then(doctor => {
            if (doctor) {
                res.send(doctor.name + " is already registered")
            } else {
                 newDoctor.save().then(() => {
            res.send("new doctor registered")
        }).catch(err => {
            console.log("/doctor/register error: ", err)
        
            res.send("/doctor/register ERROR")
        })
                
            }
        })

    } catch (err) {
        console.log("error saving new doctor");
        res.send("error saving new doctor")
    }

}



// function to sign up the doctor and set a jwt token in request cookies
const login = (req, res) => {

    const { username, password } = req.body
    Doctor.findOne({ name: username }).then(async doctor => {
        console.log(doctor)
        const verified = bcrypt.compare(password, doctor.password);
        if (verified) {
            const token = authenticate.genJWT(username, password)
                res.setHeader(
                  'Set-Cookie',
                  `jwt=${token}; path=/; HttpOnly;`
            );
            

            res.send(token)
        }
        else {
            res.send("password does not match")
        }
    })
    
}

module.exports = {register,login}