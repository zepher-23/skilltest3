const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

//define schema
const doctorSchema = mongoose.Schema({
    name: { type: String, required: true },
    password:{type:String, required:true}
})

// hash password before saving it in database
doctorSchema.pre('save', async function (next) {
  const doctor = this;

  // Only hash the password if it's modified or new
  if (!doctor.isModified('password')) {
    return next();
  }

  try {
    // Generate a salt to hash the password
    const salt = await bcrypt.genSalt(10);

    // Hash the password with the generated salt
    const hashedPassword = await bcrypt.hash(doctor.password, salt);

    // Replace the original password with the hashed one
    doctor.password = hashedPassword;

    next();
  } catch (error) {
    return next(error);
  }
});

//create the doctor model using the schema defined
const Doctor = mongoose.model('Doctor', doctorSchema)

module.exports = Doctor;

