var hapi = require('hapi');
 var ser = new hapi.Server();
 
 ser.connection(
     {
       host: 'localhost',
       port: Number(process.argv[2] || 8080)
     });
     
     ser.route(
         {
            method: 'GET', 
            path: '/',
            handler: (req, rpy) => {
                rpy('Hello hapi');
            }
         });
         ser.start((error) =>
         {
             if (error) throw error;
         });