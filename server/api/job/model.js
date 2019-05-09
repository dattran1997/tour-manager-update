const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
    },
    tour: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tour',
    },
    worker: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null,
    },
    touristNumber:{type:Number, required:true},
    startDate:{type:Date},
    endDate:{type:Date},
    checked:{type:Boolean, default:false},
});

const JobModel = mongoose.model("Job", JobSchema);
module.exports = JobModel;