const url= require('url');
const http = require('http');

function parsetime (time) {
    return{
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    };
}
function uxtime (tym){
    return {
        unixtime: tym.getTime()
    };
}

const host = http.createServer(function(req, rec){
    const URL = url.parse(req.url, true);
    const date = new Date(URL.query.iso);
    let rslt;
    
    if(/^\/api\/parsetime/.test(req.url))
    {
        rslt = parsetime(date);
    }
    else if (/^\/api\/unixtime/.test(req.url)){
        rslt = uxtime(date);
    }
    if(rslt){
        rec.writeHead(200,{'Content-Type': 'application/json'});
        rec.end(JSON.stringify(rslt));
        
    }
        else{
            rec.writeHead(404);
            rec.end();
        }
});
host.listen(Number(process.argv[2]));

