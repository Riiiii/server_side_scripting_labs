let Fs = require("fs");

let hpy = require("hapi");

let way = require("path");

let ser = new hpy.Server ();
let Rot13 = require("rot13-transform");

ser.connection ({
    host: 'localhost',
    
    port: Number(process.argv[2] || 8080)
    
});

ser.route({
    method: 'GET',
    
    path: '/',
    
    config:
    {
        handler: (request, reply)=> {
            let thisfile = Fs.createReadStream(way.join(__dirname, 'index.txt'));
            reply(thisfile.pipe(Rot13()));
        }
    }
});

ser.start((err)=>{
    if (err) throw err;
});