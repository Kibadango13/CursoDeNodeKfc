const express =require('express');
const controler = require('./controler');
const {isLoggedIn} = require('../auth');
const router = express.Router();




router.route('/')
    .get(controler.search)
    .post(isLoggedIn,controler.create);
router.route('/:id')
    .get(controler.readById)
    .put(controler.update)
    .delete(controler.remove)
module.exports = router;
