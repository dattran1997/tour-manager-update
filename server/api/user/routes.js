const UserModel = require('./model');
const express = require('express');

const userRoute = express.Router();

userRoute.get('/:id',async function(req,res){
    console.log(req.params.id);
    const id = req.params.id;

    try{   

        const user = await UserModel.findOne({_id: id});
        res.json({
            success:true,
            user: user,
        });
    }catch(error){
        res.json({
            success:false,
            message:error
        });
    }
});

userRoute.post('/', async function(req,res){
    console.log(req.body);
    const user = req.body;

    try{
        const newUser =  await UserModel.create(user);
        res.json({
            success:true
        })
    }catch(error){
        res.json({
            success:false,
            message:error
        })
    }
    
});

userRoute.post('/edit/:id', async function(req,res){
    console.log(req.body);
    console.log(req.params.id);
    const newData = req.body;
    const id = req.params.id;

    try{
        const editUser = await UserModel.findOneAndUpdate({_id: id}, newData, {new: true, useFindAndModify: false});
        res.json({
            success: true,
        })
    }catch(error){
        res.json({
            success: false,
            message:error
        })
    }
});

userRoute.post('/delete/:id', async function(req,res){
    console.log(req.params.id);
    const id = req.params.id;

    try{
        const deleteUser = await UserModel.findByIdAndDelete({_id: id});
        res.json({
            success:true
        });
    }catch(error){
        res.json({
            success:false,
            message:error
        });
    }
});

module.exports = userRoute;