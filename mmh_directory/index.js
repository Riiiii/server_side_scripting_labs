var fname;
var Hapi = require('hapi');
var Inert = require('inert');

var Path = require('path');

var ser = new Hapi.Server();
ser.conncetion(
    {
        host: 'localhost',
        port: Number(process.argv[2] || 8080)
    });
    
    ser.register(Inert, (err) =>
    {
        if (err) throw err;
        
    });
    
    ser.route(
        {
            method: 'Get',
            Path: '/foo/bar/baz/{filename}',
            handler: {
                dir: {
                    path: Path.join(fname, 'public')
                }
            }
        } 
        );
    ser.start((err) =>{
        if (err) throw err;
    }
    );