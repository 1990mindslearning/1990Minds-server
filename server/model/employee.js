const mongoose = require ('mongoose')  
const Schema = mongoose.Schema

const employeeSchema = new Schema ({

    role:{
        type:String,
        default:"employee"
    },
    
    employee:{
        
        first_name:String,
        last_name:String,
        dob:Date,
        gender:String,
        nationality:String,
        phone_number:Number,
        personal_email:String,
        present_address:String,
        work_location:String,
        doj:Date,
        acceptance_date:Date,
        division:String,
        designation:String,
        emp_id:String,
        permanent_address:String,
        
    },
    
        office_email:String,
        photo:String,
        
        email:String,
        password:String,
        confirm_password:String,
   
    personal:{
        full_name:String,
        father_name:String,
        mother_name:String,
        p_city:String,
        p_pincode:Number,
        p_state:String,
        city:String,
        pincode:Number,
        state:String,
        marital_status:String,
        father_occupation:String,
        birth_place:String,
    },
    education:{
        high_school:{
            hs_institute_name:String,
            hs_board_name:String,
            hs_from:Date,
            hs_to:Date,
            hs_percentage:Number,
        },
        intermediate:{
            i_institute_name:String,
            i_board_name:String,
            
            i_specialisation:String,
            i_from:Date,
            i_to:Date,
            i_percentage:Number,
        },
        bachelors:{
            b_institute_name:String,
            b_board_name:String,
            b_specialisation:String,
            b_from:Date,
            b_to:Date,
            b_percentage:Number,
        },
    },
    experience:{
        company_name:String,
        company_department:String,
        company_designation:String,
        company_experience:String,
        work_location:String,
        work_from:Date,
        work_to:Date,
    },
    bank:{
        bank_name:String,
        branch_name:String,
        account_number:Number,
        confirm_account_number:Number,
        IFSC_code:String,
        adhaar_number:Number,
        pancard:String,
    },

    salary:{
        basic:Number,
        da:Number,
        hra:Number,
        conveyance:Number,
        professional_tax:Number,
        gross_salary:Number,
    },

    payslip:{
        type:Schema.Types.ObjectId,
        ref:'Payslip'
    },
    notifications:
    [{
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
   
})
module.exports = mongoose.model('Employee', employeeSchema)
