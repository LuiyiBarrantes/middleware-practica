const router = require('express').Router();

const{register,login,profile} = require('../controllers/usersController')

router
      .get('/register',register)
      .get('/login', login)
      .get('/profile', profile)




module.exports = router