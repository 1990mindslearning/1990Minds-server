const mongoose = require('mongoose');
 

const Schema = mongoose.Schema

const adminSchema = new Schema({
    name:{
        type:String,
        trim:true,
        required:[true,'is required'],
    },
    email:{
        type:String,
        trim:true,
        required:[true, 'is required'],
    },
    phone_no:{
   
         type:String,

    },
    address:{
   
        type:String,

   },
    password:{
          type:String,
          trim:true,
        required:[true, 'is required'],
    }, 
    role:{
        type:String,
        default:"admin"
    },
    
  
    notifications:[{
        msg:String,
        from:String,
        isClear:Boolean,
        isView:Boolean,
        date:Date,
        leave:{
            type: Schema.Types.ObjectId,
            ref: 'Leave',
        },
    }],


    }, {timestamps:true})


module.exports = mongoose.model('Admin', adminSchema)