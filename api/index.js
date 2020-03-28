const express =require('express');
const users = require('./users');
const keywords = require('./keywords');
const todos= require('./todos');
const router = express.Router();


router.use('/users',users);
router.use('/keywords',keywords);
router.use('/todos',todos);
module.exports = router;