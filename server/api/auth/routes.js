const UserModel = require('../user/model');
const express = require('express');

const authRoute = express.Router();


authRoute.post('/login',async function(req,res){
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
    
    accountValid = await UserModel.findOne({username: username}).exec();
    if(accountValid){
        if(accountValid.password == password){
            req.session.authUser = {
                id: accountValid._id,
                username: accountValid.username,
            };
            req.session.save();
            console.log(req.session.authUser);
            
            res.json({
                success: true,
                message:'login successful',
                userId: accountValid._id,
                username: accountValid.username,
            });
        }else{
            res.json({
                message: 'password wrong'
            })
        }
    }else{
        res.json({
            message: 'username not found'
        })
    }
});

authRoute.post('/logout',function(req,res){
    try{
        req.session.destroy();
        res.json({
            success: true
        });
    }catch(error){
        res.json({
            success: false,
            message: error
        });
    }
});

module.exports = authRoute;