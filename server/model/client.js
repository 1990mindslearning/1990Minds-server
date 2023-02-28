const mongoose = require('mongoose')
const Schema = mongoose.Schema


const clientSchema = new Schema({

    first_name:{
        type:String,
         
    },
    last_name:{
        type:String,
      
    },
    company_name:{
        type:String,
        required:[true,'required']
    },

    designation:{
        type:String,
    },

    phone_number:{
        type:Number,
        required:[true,'required']

    },
    email:{
        type:String,
        required:[true,'required']

    },
    address:{
        type:String,
    },
    GSTIN:{
        type:String,
    },
    company_PAN:{
        type:String,
    },
    username:{
        type:String,
    },
    password:{
        type:String,
    },

    company_logo:{
        type:String,
        required:[true,'required']
        
    },
},{timestamps:true})

module.exports = mongoose.model('Client',clientSchema)