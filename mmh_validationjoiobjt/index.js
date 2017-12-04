let hpy = require("hapi");

var joi = require('joi');

var ser = new hpy.Server();

ser.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

ser.route({
    method: 'POST',
    path: '/login',
    config: {
        handler: (request, reply) => {
            reply('login successful');
        },
        validate: {
            payload: joi.object({
                isGuest: joi.boolean().required(),
                username: joi.string().when('isGuest', { is: false, then: joi.required() }),
                password: joi.string().alphanum(),
                accessToken: joi.string().alphanum()
            }).options({ allowUnknown: true }).without('password', 'accessToken')
        }
    }
});

ser.start((err) => {
    if (err) throw err;
});