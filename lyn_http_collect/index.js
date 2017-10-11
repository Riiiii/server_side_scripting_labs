const HTTP = require('http');
const bal = require('bl');

HTTP.get(process.argv[2], function(response)
{
    response.pipe(bal(function(eror, data)
    {
        if(eror){
            return console.error(eror);
        }
        data = data.toString();
        console.log(data.length);
        console.log(data);
    } ));
})