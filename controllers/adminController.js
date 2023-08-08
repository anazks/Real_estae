const PropertyMOdel = require("../model/PropertyMOdel")

const addProperty = async  (req,res) =>{
    console.log("adding functon")
    let data = req.body;
    const date = new Date();
    data.date = date;
    let { image } = req.files;
    try {
           let properties = await PropertyMOdel.create(data)
            console.log("property added")
            image.mv('./public/images/Property/' + properties._id + ".jpg").then((err) => {
                if (!err) {
                    return res.redirect('/admin/home')
                }
                res.redirect('/admin/add-clinic')
            })
    } catch (error) {
        console.log(error)
    }
}
const getProperty = async(req,res)=>{
    try {
            let Property = await PropertyMOdel.find();
            console.log(Property);
            res.render('admin/property',{Property})
    } catch (error) {
        console.log(error)
    }
}
const getUpdate= async(req,res)=>{
    try {
       let propId = req.params.id;
       var property = await PropertyMOdel.findById({_id:propId});
       console.log(property,"property--")                   
       res.render('admin/updateForm',{property});
    } catch (error) {
        
    }
}
const update_property = async(req,res)=>{
    let data = req.body;
    console.log(data,"data----")
    let id = req.body._id;
    try {
        let updated = await PropertyMOdel.findByIdAndUpdate({_id:id},data)
        console.log("updated")
        res.redirect('/admin/get-property')
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    addProperty,
    getProperty,
    getUpdate,
    update_property
}