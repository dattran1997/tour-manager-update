const JobModel = require('./model');
const express = require('express');

const jobRoute = express.Router();

jobRoute.get('/:jobId',async function(req,res){
    console.log(req.params.jobId);
    const jobId = req.params.jobId;
    try{
        const job = await JobModel.findOne({_id: jobId});
        res.json({
            success:true,
            job: job
        });
    }catch(error){
        res.json({
            success:false,
            message:error
        });
    }
});

jobRoute.post('/',async function(req,res){
    console.log(req.body);
    const workerId = req.body.workerId;
    const tourId = req.body.tourId;

    
    try{
        const newJob = await JobModel.create({tour: tourId, worker: workerId});
        res.json({
            success: true,
        });
    }catch(error){
        res.json({
            success: false,
            message: error
        });
    }
});
module.exports = jobRoute;