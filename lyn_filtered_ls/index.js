let fs = require('fs');
let path = require('path');
let box = process.argv[2];
let d = '.' +process.argv[3];
fs.readdir(box, function(err, files)
{
    if (err)return console.error(err);
    
    files.forEach(function(file)
    {
        if (path.extname(file) == d){
            console.log(file)
        }
    })
})
