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

const makeAdmin = async (req, res) => {
  try {
    const user = await User.findById({_id: req.params.id});
    const admin = await User.findById({_id: req.user.id});
    if (admin.isAdmin) {
      user.isAdmin = true;
      await user.save()
    } else {
      return res.status(400).json({msg: 'Not authorized'})
    }
    res.status(201).json({ msg: `${user.firstName} is now an admin`, user })
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' })
  }
}

const removeAdmin = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id });
    const admin = await User.findById({ _id: req.user.id });
    if (admin.isAdmin) {
      user.isAdmin = false;
      await user.save()
    } else {
      return res.status(400).json({ msg: 'Not authorized' })
    }
    res.status(201).json({ msg: `${user.firstName} is no longer an admin` })
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' })
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users })
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' })
  }
}

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' })
  }
}

module.exports = { getUser, getAllUsers, userRegister, userLogin, makeAdmin, removeAdmin }
