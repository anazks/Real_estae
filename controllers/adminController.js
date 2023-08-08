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
            res.render()
    } catch (error) {
        
    }
}

module.exports = {
    addProperty
}