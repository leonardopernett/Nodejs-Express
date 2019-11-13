const express = require('express')
const route = express.Router()


route.get('/', (req,res)=>{

    res.render('index');
  
})

route.get('/login', (req,res)=>{

    res.render('login');
  
})

route.get('/about', (req,res)=>{

    res.render('about');
  
})

module.exports = route;