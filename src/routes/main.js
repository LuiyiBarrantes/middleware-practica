const router = require('express').Router();

const{index,admin,notEntry} = require('../controllers/mainController');
const accessAdmin = require('../middleware/accessAdmin');

router
      .get('/',index)
      .get('/admin', accessAdmin, admin)
      .get('/not-entry', notEntry)



module.exports = router