const CustomerModel = require('./model');
const express = require('express');

const customerRoute = express.Router();

customerRoute.get('/', async function(req,res){
    try{
        const allCustomer =  await CustomerModel.find();
        res.json({
            success:true,
            allCustomer: allCustomer
        });
    }catch(error){
        res.json({
            message:error,
        });
    }
});

module.exports = customerRoute;