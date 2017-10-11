const fs = require("fs")
const path = require("path")


module.exports = function(ree, filternum, callback)
{
    fs.readdir(ree, function(err, list){
        if (err){
            return callback(err)
        }
        
        list = list.filter(function(file){
            return path.extname(file) === '.' +filternum
        })
        callback(null,list)
    })
}