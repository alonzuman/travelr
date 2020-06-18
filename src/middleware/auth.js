const jwt = require('jsonwebtoken');
const config = require('config');

const auth = (req, res, next) => {
  const token = req.headers['auth-token'];
  if (!token) return res.status(401).json({msg: 'No token, access denied'});
  try {
    const decoded = jwt.verify(token, config.get('JWT_SECRET'));
    req.user = decoded.user;
    next();
  } catch (error) {
    // console.log(error);
    res.status(401).json({msg: 'Token not valid'})
  }
}


module.exports = auth;
