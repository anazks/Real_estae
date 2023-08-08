const propModel = require('../model/PropertyMOdel')
const getProp = async(req,res)=>{
    try {
        let properties = await propModel.find();
        console.log(properties)
        let land = await propModel.find({type:"Land"})
        console.log(land,"land");
        res.render('index',{properties,land});   
    } catch (error) {
        
    }
}

module.exports = {getProp}