const UserModel = require('../user/model');
const express = require('express');
const nodemailer = require('nodemailer');

const authRoute = express.Router();

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:'tour.manager.502@gmail.com',
        pass:'Dattran123'
    },
});

    

authRoute.post('/mail',async function(req,res){
    console.log(req.body);
    const jobId = req.body.jobId;
    const customerEmail = req.body.customerEmail;

    const message = {
        from: 'tour.manager.502@gmail.com', // sender address
        to: customerEmail, // list of receivers
        subject: "XÁC NHẬN ĐẶT TOUR", // Subject line
        text: "Cảm ơn bạn đã tin tưởng sử dụng dịch dụ này vui lòng click link dưới để xác nhận đặt tour",
        html:`
        <h2>Cảm ơn bạn đã tin tưởng sử dụng dịch vụ này vui lòng click link dưới để xác nhận đặt tour</h2>
        <p> >>>><a href=${"http://localhost:3000/checkTour/" + jobId}>XÁC NHẬN</a><<<<< </p>`
    }

    try{
        const mail = await transporter.sendMail(message);
        res.json({
            success:true,
            message: mail,
        });
        console.log("Message sent: %s", mail.messageId);
    }catch(error){
        res.json({
            message:error,
        });
        console.log(error);
    }

});

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
                role: accountValid.role,
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