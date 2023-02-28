const mongoose = require('mongoose');

const Schema = mongoose.Schema

const leaveSchema = new Schema({

    division:{
        type:String,
        required:[true,'is required'],
    },
    nature_of_leave:{
        type:String,
        trim:true,
        required:[true,'is required'],
    },
    date_from:{
        type:Date,
        required:[true,'is required'],
    },
    date_to:{
        type:Date,
        required:[true,'is required'],
    },
    reason:{
        type:String,
        default:"Personal reasons"
    },
    aproove:{
        type:Boolean,
        default:"false",
    },
    created:{
        type:Boolean,
        default:"true",
    },
    comments:{
        type:String,
        trim:true,
    

    },
    notification:{
        type:Number,
        default:0,
    },

    employee:{
        type: Schema.Types.ObjectId,
        ref: 'Employee',
    },

},{timestamps:true})

module.exports = mongoose.model('Leave', leaveSchema)
