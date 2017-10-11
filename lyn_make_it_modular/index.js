const filterfun = require('./filter.js')
const ree = process.argv[2]
const filternum = process.argv[3]
filterfun(ree, filternum,function(err, list){
    if (err){
        return console.error('There was an error:', err)
    }
    list.forEach(function(file){
        console.log(file)
    })
})