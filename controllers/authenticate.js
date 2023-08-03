const jwt = require('jsonwebtoken')


const auth = async (req, res, next) => {
  const secretKey = 'hospital';
  try {
    // Get the JWT token from the cookies in the request
    const token = req.cookies.jwt;
    console.log(req.cookies)

    if (!token) {
      return res.status(401).send('Unauthorized: No token provided.');
    }

    // Verify the JWT token
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).send('Unauthorized: Invalid token.');
      }

      // Token is valid, you can access the decoded payload in 'decoded'
      // For example, to access the 'name' field: decoded.name

      // You can also attach the decoded payload to the request object for future use
      req.user = decoded;

      // Proceed to the next middleware or route handler
      next();
    });
  } catch (error) {
    console.error('Error during authentication:', error.message);
    return res.status(500).send('Internal Server Error');
  }
};

//function to generate jwt token after doctor login and set the cookie
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
