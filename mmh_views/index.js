let happy = require('hapi')
let look = require('vision')
let way = require('path')

var ser = new happy.Server();

ser.connection(
    {
        host:'localhost',
        port:Number(process.argv[2] || 8080)
    });
    
    ser.register(look, (error) =>{
        if (error) throw error;
    });
    
    ser.views({
        engines:{
            html: require('handlebars')
        },
        path: way.join(__dirname, 'templates')
    });
    
    ser.route({
        method: 'GET',
        path: '/',
        
        handler:{
            view: 'index.html'
        }
    });
    
    ser.start((err) =>{
        if (err) throw err;
    });