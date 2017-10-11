const net = require('net')
function tym (i)
{
    return (i < 10 ? '0' : '') + i
}
function dte (){
    const dt = new Date()
    return dt.getFullYear() + '-' +
    tym(dt.getMinutes() + 1) + '-' +
    tym(dt.getDate()) + ' ' +
    tym(dt.getHours())+ ':' +
    tym(dt.getMinutes())
    
    
}
const server = net.createServer(function(td){
    td.end(dte() + '\n')
})
server.listen(Number(process.argv[2]))