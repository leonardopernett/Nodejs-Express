const express = require('express');
const routeApi = express.Router();


routeApi.get('/api',(req, res) => {

    res.json({

        url: 'https://randomuser.me/api/',
    })
})


module.exports = routeApi;