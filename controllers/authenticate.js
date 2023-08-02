const jwt = require('jsonwebtoken')


const auth = async (req, res, next) => {


    
};

const genJWT = (username, password) => {
    const secretKey = "hospital"
     try {
    
    const payload = {
        name: username,
        password:password
    };
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

    return token;
  } catch (error) {
    // Handle any errors that might occur during token generation.
    console.error('Error generating JWT:', error.message);
    return null;
  }
}




module.exports = {auth,genJWT};
