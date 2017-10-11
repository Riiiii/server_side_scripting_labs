var Hpy = require('hapi');

var Inrt = require('inert');

var Path = require('path');



var server = new Hpy.Server(
    {
        connections:{
            routes:{
                files:{
                    relativeTo: __dirname
                }
            }
        }
    });
    
    server.conncetion({
        host: 'localhost',
        port: Number(process.argv[2] || 8080)
    });
    server.register(Inrt, (err)=>
    {
        if(err) throw err;
    }
    )
    
    server.route(
        {
            method: 'GET',
            path: '/',
            file: Path.join(__dirname, 'index.html')
            
        });
        server.start((err) =>{
            if (err) throw err;
        });