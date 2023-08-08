const propModel = require('../model/PropertyMOdel')
const getProp = async(req,res)=>{
    let properties = await propModel.find();
    console.log(properties)
    res.render('index',{properties});
}
module.exports = {getProp}