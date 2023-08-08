var mongoose = require('mongoose');

const PropertyScema = new mongoose.Schema({
    price: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    date:{
        type:String
    }
 
})

module.exports = mongoose.model("property", PropertyScema);
