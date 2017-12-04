let fname;
let Hapi = require('hapi');
let Inert = require('inert');

let Path = require('path');

let ser = new Hapi.Server();
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