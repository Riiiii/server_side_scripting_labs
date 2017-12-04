let Hpy = require('hapi');

let Inrt = require('inert');

let way = require('path');



const server = new Hpy.Server(
    {
        connections:{
            routes:{
                files:{
                    relativeTo: __dirname
                }
            }
        }
    });
    
    server.connection({
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
            
            handler: {
                
            
            file: way.join(__dirname, 'index.html')
            }
            
        });
        server.start((err) =>{
            if (err) throw err;
        });