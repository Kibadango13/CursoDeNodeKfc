const express = require('express');
const router = express.Router();
const keywordsService = require('./api/keywords/service');
const todosService = require('./api/todos/service');

router.route('/about')
.get((req,res)=>{
    res.render('templates/about',{  
                                    message:'Hello EJS',
                                    values:['nose','kevin'] 
                                });
});

router.route('/keywords')
.get(async (req,res)=>{
    const keywords = await keywordsService.search();
    res.render('templates/keywords',{keywords})
})


router.route('/todos')
.get(async (req,res)=>{
    const todos = await todosService.search();
    res.render('templates/todos',{todos})
})



module.exports = router;
