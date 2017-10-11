const http = require('http')
const fs = require('fs')

const host = http.createServer(function(req, rq)
{
    rq.writeHead(200, {'request-type' : 'text/empty'})
    fs.createReadStream(process.argv[3]).pipe(rq)
})

host.listen(Number(process.argv[2]))