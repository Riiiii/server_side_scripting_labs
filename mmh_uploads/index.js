let hpy = require("hapi");

let ser = new hpy.Server();

ser.connection({
    host: 'localhost',
    
    port: Number(process.argv[2] || 8080)
});

ser.route({
method: 'POST',
  path: '/upload',
  config: {
    handler: (request, reply) => {
      var body = '';

      request.payload.file.on('data', (d) => {
        body += d;
      });

      request.payload.file.on('end', () => {
        var rslt = {
          description: request.payload.description,
          file: {
            data: body,
            filename: request.payload.file.hapi.filename,
            headers: request.payload.file.hapi.headers
          }
        };

        reply(JSON.stringify(rslt));
      });
    },
    payload: {
      output: 'stream',
      parse: true,
      allow: 'multipart/form-data'
    }
  }
});

ser.start((err) => {
    if (err) throw err;
});