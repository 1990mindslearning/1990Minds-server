const mongoose = require ('mongoose')  
const Schema = mongoose.Schema


const payslipSchema = new Schema ({
     

    month:{
        type:String,
    },
    no_of_working_days:{
        type:Number,
    },
    deductions_LOP:{
        type:Number
    },

    deductions_WFH:{
        type:Number
    },
    Net_Salary :{
        type:Number
    },
    employee:{
        type: Schema.Types.ObjectId,
        ref: 'Employee',
    },


})

module.exports = mongoose.model('Payslip', payslipSchema)

    
    



