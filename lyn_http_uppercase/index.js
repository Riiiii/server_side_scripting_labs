const http = require('http');
const post = require('through2-map')


const ser = http.createServer(function(put, rec) 
{
    if(put.method !== 'POST')
    {
        return rec.end('Send a Message\n');
        
    }
    put.pipe(post(function(trash)
    {
        return trash.toString().toUpperCase();
    }))
    .pipe(rec);
});
ser.listen(Number(process.argv[2]));
  
