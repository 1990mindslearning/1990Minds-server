const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const todolistSchema = new Schema({
    employee:{
        type: Schema.Types.ObjectId,
        ref: 'Employee',
    },
    title:{
        type:String,    
        required:[true,'title is required'],
    },
    date:{
        type:Date,
        required:[true,'date is required'],
    },
    status:{
        type:String,
    },
    priority:{
        type:String,
        required:[true,'priority is required'],
    },
    enddate:{
        type:String,
    },
    startdate:{
        type:String,
    },
    showPriority:{
        type:String,
    },

},{timestamps:true})

module.exports = mongoose.model('Todolist',todolistSchema)
