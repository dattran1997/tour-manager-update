const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    fullname:{type:String,required:true},
    identifyNumber:{type:String,required:true},
    address:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:true}
});

const CustomerModel = mongoose.model("Customer", CustomerSchema);
module.exports = CustomerModel;