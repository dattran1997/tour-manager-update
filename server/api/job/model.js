const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    tour: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tour',
    },
    worker: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
});

const JobModel = mongoose.model("Job", JobSchema);
module.exports = JobModel;