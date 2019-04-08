const mongoose = require('mongoose');

const TourSchema = new mongoose.Schema({
    title: {type:String, required:true},
    description: {type:String, required:true},
    count: {type:Number, default:0},
    from: {type:String, required:true},
    to: {type:String, required:true},
    image:{type:String, required:true}
});

const TourModel = mongoose.model("Tour", TourSchema);
module.exports = TourModel;
