const authenticateUser = async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password');
      res.json({
        user
      })
    } catch (error) {
      // console.error(error.message);
      res.status(500).json({
        msg: 'Server Error'
      })
    }
  }

module.exports = authenticateUser;
