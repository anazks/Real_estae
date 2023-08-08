var mongoose = require('mongoose');
var con = ()=>{
    mongoose.connect("mongodb+srv://anazks:123@cluster0.jxpil.mongodb.net/RealEstate?retryWrites=true&w=majority")
}
module.exports = con;