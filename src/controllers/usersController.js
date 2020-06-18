const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User');

const userRegister = async (req, res) => {
  const { email, password, firstName, lastName, avatar } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({
        email,
        firstName,
        lastName,
        avatar,
        password
      });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      const payload = {
        user: {
          id: user.id
        }
      }
      jwt.sign(payload, config.get('JWT_SECRET'), { expiresIn: 36000000 },
        (err, token) => {
          if (err) throw err;
          return res.json({ token })
        });
    } else {
      return res.status(400).json({
        msg: 'User already exists'
      })
    }
  } catch (error) {
    return res.status(500).json({
      msg: 'Server Error'
    })
  }
}

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({email});
    if (!user) return res.status(401).json({msg: 'Invalid credentials'});

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({msg: 'Invalid credentials'});

    const payload = {
      user: {
        id: user.id
      }
    }

    jwt.sign(payload, config.get('JWT_SECRET'),
    {expiresIn: 360000},
    (err, token) => {
      if (err) throw err;
      res.json({ token });
    })
  } catch (error) {
    // console.log(error.message);
    res.status(500).json({msg: 'Server'})
  }
}

module.exports = { userRegister, userLogin }
