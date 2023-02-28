const mongoose = require ('mongoose')  
const Schema = mongoose.Schema


const employeeSchema = new Schema ({
    

    first_name:{
        type:String,
        required:[true,'name is required']
    },
    last_name:{
        type:String,
        required:[true,'name is required']
    },
    dob:{
        type:Date,
        required:[true,'name is required']
    },
    gender:{
        type:String,
        required:[true,'name is required']
    },
    nationality:{
        type:String,
        required:[true,'name is required']
    },
    phone_number:{
        type:Number,
        required:[true,'name is required']
    },
    personal_email:{
        type:String,
        required:[true,'name is required']
    },
    present_address:{
        type:String,
        required:[true,'name is required']
    },

    work_location:{
        type:String,
        required:[true,'name is required']
    },

    doj:{
        type:Date,
        required:[true,'name is required']
    },
    acceptance_date:{
        type:Date,
        required:[true,'name is required']
    },
    division:{
        type:String,
        required:[true,'name is required']
    },
    designation:{
        type:String,
        required:[true,'name is required']
    },
    emp_id :{
        type:String,
        required:[true,'name is required']
    },
    office_email:{
        type:String,
        required:[true,'name is required']
    },
    permanent_address:{
        type:String,
        required:[true,'name is required']
    },
    p_city:{
        type:String,
        required:[true,'name is required']
    },
    p_pincode:{
        type:String,
        required:[true,'name is required']
    },
    p_state:{
        type:String,
        required:[true,'name is required']
    },
    role:{
        type:String,
        default:"employee"
    },
    
    //Login 
    email:{
        type:String,
        required:[true,'name is required']
    },
    password:{
            type:String,
            required:[true,'password is required']
    },

    // Personal
    full_name:{
        type:String,
        required:[true,'name is required']
    },
    father_name:{
        type:String,
        required:[true,'name is required']
    },
    mother_name:{
        type:String,
        required:[true,'name is required']
    },
    city:{
        type:String,
        required:[true,'name is required']
    },
    pincode:{
        type:String,
        required:[true,'name is required']
    },
    state:{
        type:String,
        required:[true,'name is required']   
    },
    marital_status:{
        type:String,
        required:[true,'name is required']
    },
    father_occupation:{
        type:String,
        required:[true,'name is required']
    },
    birth_place:{
        type:String,
        required:[true,'name is required']
    },

    // Education
    hs_institute_name:{
        type:String,
        required:[true,'name is required']
    },
    hs_board_name:{
        type:String,
        required:[true,'name is required']
    },
    hs_from:{
        type:Date,
        required:[true,'name is required']
    },
    hs_to:{
        type:Date,
        required:[true,'name is required']
    },
    hs_percentage:{
        type:Number,
        required:[true,'name is required']
    },

    i_institute_name:{
        type:String,
        required:[true,'name is required']
    },
    i_board_name:{
        type:String,
        required:[true,'name is required']
    },
    i_specialisation:{
        type:String,
        required:[true,'name is required']
    },
    i_from:{
        type:Date,
        required:[true,'name is required']
    },
    i_to:{
        type:Date,
        required:[true,'name is required']
    },
    i_percentage:{
        type:Number,
        required:[true,'name is required']
    },

    b_institute_name:{
        type:String,
        required:[true,'name is required']
    },
    b_board_name:{
        type:String,
        required:[true,'name is required']
    },
    b_specialisation:{
        type:String,
        required:[true,'name is required']
    },
    b_from:{
        type:Date,
        required:[true,'name is required']
    },
    b_to:{
        type:Date,
        required:[true,'name is required']
    },
    b_percentage:{
        type:Number,
        required:[true,'name is required']
    },

    // Experience
    company_name:{
        type:String,
        required:[true,'name is required']
    },
    company_department:{
        type:String,
        required:[true,'name is required']
    },
    company_designation:{
        type:String,
        required:[true,'name is required']
    },
    company_experience:{
        type:String,
        required:[true,'name is required']
    },
    work_location:{
        type:String,
        required:[true,'work location required']
    },
    work_from:{
        type:Date,
        required:[true,'work from year required']
    },
    work_to:{
        type:String,
        required:[true,'work to year required']
    },

    // Bank Model
    bank_name:{
        type:String,
        required:[true,'work to year required']
    },
    branch_name:{
        type:String,
        required:[true,'work to year required']
    },
    account_number:{
        type:String,
        required:[true,'work to year required']
    },
    IFSC_code:{
        type:String,
        required:[true,'work to year required']
    },
    adhaar_number:{
        type:Number,
        required:[true,'work to year required']
    },
    pancard:{
        type:String,
        required:[true,'work to year required']
    },
    
    // Salary details
    basic:{
        type:Number,
        required:[true,'work to year required']
    },
    da:{
        type:Number,
        required:[true,'work to year required']
    },
    hra:{
        type:Number,
        required:[true,'work to year required']
    },
    conveyance:{
        type:Number,
        required:[true,'work to year required']
    },
    professional_tax:{
        type:Number,
        required:[true,'work to year required']
    },
    gross_salary:{
        type:Number,
        
    },

    payslip:{
        type: Schema.Types.ObjectId,
        ref: 'Payslip',
    }
  
})

module.exports = mongoose.model('Employee', employeeSchema)

    
    



