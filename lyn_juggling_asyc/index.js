const htp = require('http')
const co = require('bl')
const rslt =[]
let count = 0, i=0;
function result(){
    
    for(i=0; i<3; i++){
        console.log(rslt[i])
    }
    
}

function httpGet (index){
    htp.get(process.argv[2 + index], function(response){
        response.pipe(co (function(err, data){
            if (err){
                return console.error(err)
            }
            rslt[index] = data.toString()
            count++
            if (count === 3){
                result()
                
            }
        }))
    })
    
}
for(i=0; i < 3; i++){
    httpGet(i)
}