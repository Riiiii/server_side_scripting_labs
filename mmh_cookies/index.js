let hpy = require("hapi");

let Boom = require("boom");

let ser = new hpy.Server();

ser.connection({
    host: 'localhost',
    
    port: Number(process.argv[2] || 8080)
});

ser.state('session', {
    
    path: '/',
    
    encoding: 'base64json',
    
    ttl: 10,
    domain: 'localhost',
    
    isSameSite: false,
    
    isSecure: false,
    
    isHttpOnly: false
});

ser. route({
    method: 'GET',
    
    path: '/set-cookie',
    
    handler: (request, reply) => {
        return reply({
            message: 'success'
            
        })
        .state('session', { key: 'makemehapi'});
    },
    config: {
        state: {
            parse: true,
            failAction: 'log'
        }
    }
});

ser. route({
    method: 'GET',
    path: '/check-cookie',
    
    handler: (request, reply) => {
        let session = request.state.session;
        let result;
        
        if (session){
            result = {user : 'hapi'};
            
        }
        else{
            result: Boom.unauthorized('Missing authentication');
        }
        
        reply(result);
        
    }
});

ser.start((err)=>{
    if (err) throw err;
});