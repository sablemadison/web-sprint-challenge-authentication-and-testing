const router = require('express').Router();

const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {
  
  const user = req.body
  const hash = bcrypt.hashSync(user.password, 10)
  user.password = hash;

  try {
    const newUser = await Users.add(user)
    res.status(201).json(newUser, {message:''})
  } catch(err) {
    res.status(500).json({message:'unable to register user'})
  }

});

router.post('/login', async (req, res) => {
  // implement login
  
});

module.exports = router;
