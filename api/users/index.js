const express =require('express');
const controler = require('./controler');
const router = express.Router();

router.route('/')
    .post(controler.create);
router.route('/login')
    .post(controler.login);
module.exports = router;
