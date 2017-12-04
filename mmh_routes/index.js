var Happy = require('hapi');

var ser = new Happy.Server();
ser.connection(
    {
        host: 'localhost',
        port: Number(process.argv[2] || 8080)
    });
    ser.route({
        method: 'GET',
        path: '/{name}',
        handler: (request, reply) =>{
            reply("Hello " + request.params.name);
        }
    });
    ser.start((err) => {
        if(err) throw err;
    });
