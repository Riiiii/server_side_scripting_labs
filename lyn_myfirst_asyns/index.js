const fs = require('fs');
const para = process.argv[2];
fs.readFile(para, function(err, contents)
{
    if(err)
    {
        return console.log(err)
    }
    const word =contents.toString().split('\n').length - 1
    console.log(word);
})