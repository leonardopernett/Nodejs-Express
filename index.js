const express = require('express')
const morgan = require('morgan')
const app = new express()

//routes
const router = require('./route')
const routeraApi = require('./api')

//template ejg
app.set('view engine', 'ejs');
app.set('views' , __dirname+'/views');


//route
app.use(router)
app.use(routeraApi)

//middleware
app.set('appName', 'mi first serve')
app.use(morgan('tiny'))


//port
app.listen(3000, function(){

      console.log('iniciando on port 3000')
      console.log('name:' , app.get('appName'))
});
