const mongoose = require('mongoose');

const TourSchema = new mongoose.Schema({
    title: {type:String, required:true},
    description: {type:String, required:true},
    detail: {type:String, require:true},
    price: {type:Number, required:true},
    duration: {type:Number, required:true},
    image: {type:String, required:true},
    count: {type:Number, default:0},
    kind:{type:String, required:true},
});

const TourModel = mongoose.model("Tour", TourSchema);
module.exports = TourModel;
