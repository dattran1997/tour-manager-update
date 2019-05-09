const JobModel = require('./model');
const CustomerModel = require('../customer/model');
const TourModel = require('../tour/model');
const express = require('express');

const jobRoute = express.Router();

jobRoute.get('/', async function(req,res){
    const allJob = await JobModel.find().populate('customer').populate('tour').populate('worker');
    console.log(allJob);
    res.json({
        success: true,
        allJob: allJob,
    });
    try{

    }catch(error){
        res.json({
            message: error,
        });
    }
});

jobRoute.get('/:jobId',async function(req,res){
    console.log(req.params.jobId);
    const jobId = req.params.jobId;
    try{
        const job = await JobModel.findOne({_id: jobId}).populate('customer').populate('tour').populate('worker');
        res.json({
            success:true,
            job: job
        });
    }catch(error){
        res.json({
            message:error
        });
    }
});

jobRoute.post('/',async function(req,res){
    console.log(req.body);
    const tourId = req.body.tourId;
    const customerInfo = req.body.touristInfo;
    const touristNumber = req.body.touristNumber;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    var customerId ='';

    try{
        const existCustomer = await CustomerModel.findOne({identifyNumber:customerInfo.identifyNumber});
        console.log(existCustomer);
        if(existCustomer){
            customerId = existCustomer._id;
        }else{
            const newCustomer = await CustomerModel.create(customerInfo);
            customerId = newCustomer._id;
        }
        console.log(customerId);
        const newJob = await JobModel.create({customer: customerId, tour: tourId, touristNumber:parseInt(touristNumber), startDate:startDate, endDate:endDate});
        const addTourCount = await TourModel.findOneAndUpdate({_id: tourId},{$inc: {count: 1} },{new: true, useFindAndModify: false})
        res.json({
            success:true,
            jobId: newJob._id,
        });
    }catch(error){
        res.json({
            message: error
        });
        console.log(error);
    }
});

jobRoute.post('/assignJob', async function(req,res){
    console.log(req.body);
    const workerId = req.body.adminId;
    const jobId = req.body.jobId;

    try{
        const job = await JobModel.findOneAndUpdate({_id: jobId},{$set:{worker: workerId}},{new: true, useFindAndModify: false});
        console.log(job);
        res.json({
            success:true,
        });
    }catch(error){
        res.json({
            message: error,
        });
    }
});

jobRoute.post('/checked/:jobId', async function(req,res){
    const jobId = req.params.jobId;
    
    try{
        const job = await JobModel.findOneAndUpdate({_id: jobId},{$set:{checked: true}},{new: true, useFindAndModify: false});
        console.log(job);
        res.json({
            success:true,
        });
    }catch(error){
        res.json({
            message: error,
        });
    }
});

module.exports = jobRoute;